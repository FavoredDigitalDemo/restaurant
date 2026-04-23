'use client'

import Link from 'next/link'
import { Suspense } from 'react'
import { Utensils, MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react'
import { useShopInfo, useParamLink } from '@/hooks/use-shop-info'

function FooterContent() {
  const { shopName, city, phone } = useShopInfo()
  const paramLink = useParamLink()

  return (
    <footer className="border-t border-border bg-card pb-24 md:pb-0">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href={paramLink('/')} className="flex items-center gap-2">
              <Utensils className="h-6 w-6 text-primary" />
              <span className="font-serif text-xl font-bold text-heading">{shopName}</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Experience exceptional cuisine in a warm, inviting atmosphere.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold text-heading">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: '/menu', label: 'Our Menu' },
                { href: '/about', label: 'Our Story' },
                { href: '/reservations', label: 'Reservations' },
                { href: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={paramLink(link.href)}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold text-heading">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>123 Main Street, {city}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href={`tel:${phone.replace(/\D/g, '')}`} className="hover:text-primary">
                  {phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold text-heading">Hours</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <p>Mon - Thu: 11am - 9pm</p>
                  <p>Fri - Sat: 11am - 10pm</p>
                  <p>Sunday: 10am - 8pm</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {shopName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export function Footer() {
  return (
    <Suspense fallback={<FooterSkeleton />}>
      <FooterContent />
    </Suspense>
  )
}

function FooterSkeleton() {
  return (
    <footer className="border-t border-border bg-card pb-24 md:pb-0">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="space-y-4">
              <div className="h-6 w-32 animate-pulse rounded bg-muted" />
              <div className="h-16 w-full animate-pulse rounded bg-muted" />
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
