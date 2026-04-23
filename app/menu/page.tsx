import { Metadata } from 'next'
import { MenuContent } from '@/components/menu/menu-content'

export const metadata: Metadata = {
  title: 'Menu | Fine Dining Experience',
  description: 'Explore our diverse menu featuring locally-sourced ingredients and chef-crafted dishes. Starters, mains, sides, desserts, and drinks.',
}

export default function MenuPage() {
  return <MenuContent />
}
