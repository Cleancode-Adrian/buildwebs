# BuildWebs.eu

Modern, dark-themed landing website for BuildWebs - European web development agency.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Tech Stack

- Next.js 14 + React 18
- TypeScript
- TailwindCSS
- Framer Motion
- Nodemailer (contact form via own SMTP mailbox)

## Configuration

### Contact form (SMTP)
The form posts to `app/api/contact/route.ts`, which sends mail through the SMTP mailbox configured in `.env.local` (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_TO`). See `.env.example`.

### Google Analytics
Update `app/layout.tsx` (line 65, 76):
```typescript
gtag('config', 'G-XXXXXXXXXX');
```

## Deploy

### Vercel (Recommended)
```bash
vercel
```

### Build for Production
```bash
npm run build
npm start
```

## Contact

Email: contact@buildwebs.eu

