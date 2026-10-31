import { HiDesktopComputer, HiShoppingCart, HiShieldCheck, HiEye } from 'react-icons/hi'
import type { Service } from '@/lib/services'

const icons = {
  website: HiDesktopComputer,
  store: HiShoppingCart,
  care: HiShieldCheck,
  accessibility: HiEye,
}

export default function ServiceIcon({ icon, className }: { icon: Service['icon']; className?: string }) {
  const Icon = icons[icon]
  return <Icon className={className} aria-hidden="true" />
}
