import { notFound } from 'next/navigation'

// Any unknown URL renders app/[lang]/not-found.tsx inside the normal layout.
export default function CatchAll() {
  notFound()
}
