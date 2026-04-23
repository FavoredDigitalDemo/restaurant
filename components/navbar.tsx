'use client'

import Link from 'next/link'
import { useState, Suspense } from 'react'
import { Menu, X, Utensils } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useShopInfo, useParamLink } from '@/hooks/use-shop-info'
import GloriaOrderButton from '@/components/GloriaOrderButton'
import GloriaReserveButton from '@/components/GloriaReserveButton'

function NavbarContent() {
  const [isOpen, setIsOpen] = useState(false)
  const { shopName } = useShopInfo()
  const paramLink = useParamLink()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/about', label: 'About' },
    { href: '/reservations', label: 'Reservations' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href={paramLink('/')} className="flex items-center gap-2">
          <Utensils className="h-6 w-6 text-primary" />
          <span className="font-serif text-xl font-bold text-heading">{shopName}</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={paramLink(link.href)}
              className="text-sm font-medium text-foreground/80 transition-colors duration-150 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 md:flex">
          {/* GLORIAFOOD_ORDER_WIDGET */}
          <GloriaOrderButton className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" />
          {/* GLORIAFOOD_RESERVATION_WIDGET */}
          <GloriaReserveButton className="bg-primary text-primary-foreground hover:bg-primary/90" />
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="rounded-lg p-2 text-foreground md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="space-y-1 px-4 pb-4 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={paramLink(link.href)}
                className="block rounded-lg px-3 py-2 text-base font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export function Navbar() {
  return (
    <Suspense fallback={<NavbarSkeleton />}>
      <NavbarContent />
    </Suspense>
  )
}

function NavbarSkeleton() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Utensils className="h-6 w-6 text-primary" />
          <div className="h-6 w-32 animate-pulse rounded bg-muted" />
        </div>
        <div className="hidden gap-8 md:flex">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-4 w-16 animate-pulse rounded bg-muted" />
          ))}
        </div>
        <div className="hidden gap-3 md:flex">
          <div className="h-9 w-24 animate-pulse rounded-lg bg-muted" />
          <div className="h-9 w-28 animate-pulse rounded-lg bg-muted" />
        </div>
      </nav>
    </header>
  )
}
