import { ImageResponse } from 'next/og'

export const alt = 'BuildWebs.eu — WordPress websites & WooCommerce stores for EU businesses'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const runtime = 'edge'

const texts = {
  en: {
    title: 'Websites & Stores That Sell',
    services: 'WordPress · WooCommerce · Care plans · WCAG / EAA',
    footer: 'Fixed prices in EUR · Businesses across the EU',
  },
  de: {
    title: 'Webseiten & Shops, die verkaufen',
    services: 'WordPress · WooCommerce · Wartung · Barrierefreiheit (BFSG)',
    footer: 'Festpreise in Euro · Für Unternehmen in der ganzen EU',
  },
}

export default function OpengraphImage({ params }: { params: { lang: string } }) {
  const t = texts[params.lang as keyof typeof texts] ?? texts.en
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #0D0D0D 0%, #101a2e 60%, #0D0D0D 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 40, fontWeight: 700, color: '#60A5FA' }}>
          Build<span style={{ color: '#00FFFF' }}>Webs</span>.eu
        </div>
        <div style={{ display: 'flex', fontSize: 72, fontWeight: 800, marginTop: 30, lineHeight: 1.1 }}>
          {t.title}
        </div>
        <div style={{ display: 'flex', fontSize: 34, color: '#9CA3AF', marginTop: 24 }}>
          {t.services}
        </div>
        <div style={{ display: 'flex', fontSize: 30, color: '#00FFFF', marginTop: 50 }}>
          {t.footer}
        </div>
      </div>
    ),
    size
  )
}
