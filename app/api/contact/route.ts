import { NextResponse, type NextRequest } from 'next/server'
import nodemailer from 'nodemailer'

// Contact form delivery via our own SMTP mailbox (lh.pl). Settings come from .env.local:
// SMTP_HOST, SMTP_PORT (465 = SSL), SMTP_USER, SMTP_PASS, CONTACT_TO (defaults to SMTP_USER).
// These are server-side variables: changing them needs only a PM2 restart, not a rebuild.

export const runtime = 'nodejs'

const MAX = { name: 120, email: 200, company: 120, message: 5000 }

// Simple per-IP rate limit (in-memory, resets on restart): 5 messages per 15 minutes
const WINDOW_MS = 15 * 60 * 1000
const LIMIT = 5
const hits = new Map<string, number[]>()

function rateLimited(ip: string) {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  return recent.length > LIMIT
}

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] as string)

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || request.ip || 'unknown'
  if (rateLimited(ip)) return NextResponse.json({ error: 'rate_limited' }, { status: 429 })

  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 })
  }

  const str = (key: keyof typeof MAX) => String(body[key] ?? '').trim().slice(0, MAX[key])
  const name = str('name')
  const email = str('email')
  const company = str('company')
  const message = str('message')
  const lang = body.lang === 'de' ? 'de' : 'en'

  // Honeypot: real users never fill this hidden field
  if (typeof body.website === 'string' && body.website.length > 0) {
    return NextResponse.json({ ok: true })
  }

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || body.privacyAccepted !== true) {
    return NextResponse.json({ error: 'validation' }, { status: 400 })
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env
  const to = process.env.CONTACT_TO || SMTP_USER
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !to) {
    console.error('Contact form: SMTP is not configured (SMTP_HOST / SMTP_USER / SMTP_PASS)')
    return NextResponse.json({ error: 'not_configured' }, { status: 500 })
  }

  const port = Number(SMTP_PORT || 465)
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  })

  const subject = lang === 'de' ? `Neue Anfrage über buildwebs.eu – ${name}` : `New enquiry via buildwebs.eu – ${name}`
  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    `Language: ${lang}`,
    `IP: ${ip}`,
    '',
    message,
  ].filter((l) => l !== null) as string[]

  try {
    await transporter.sendMail({
      from: `"BuildWebs.eu contact form" <${SMTP_USER}>`,
      to,
      replyTo: `"${name.replace(/"/g, '')}" <${email}>`,
      subject,
      text: lines.join('\n'),
      html: `<p>${lines.map(escapeHtml).join('<br>')}</p>`,
    })
  } catch (err) {
    console.error('Contact form: sending failed', err)
    return NextResponse.json({ error: 'send_failed' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
