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
- EmailJS

## Configuration

### EmailJS (Contact Form)
Update `components/Contact.tsx` (line ~40):
```typescript
await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  { ... },
  'YOUR_PUBLIC_KEY'
)
```

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

