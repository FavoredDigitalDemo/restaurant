'use client'

import { Suspense } from 'react'
import { MapPin, Phone, Mail, Clock, Car, Accessibility, Instagram, Facebook } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { useShopInfo } from '@/hooks/use-shop-info'

function ContactContentInner() {
  const { shopName, city, phone } = useShopInfo()

  return (
    <div className="bg-background pb-24 md:pb-0">
      {/* Header */}
      <div className="bg-heading py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-4 font-serif text-4xl font-bold text-white sm:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto max-w-2xl text-white/80">
            We&apos;d love to hear from you
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-8">
              {/* Location */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-heading">Location</h3>
                  <p className="mt-1 text-muted-foreground">
                    123 Main Street<br />
                    {city}, State 12345
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-heading">Phone</h3>
                  <a 
                    href={`tel:${phone.replace(/\D/g, '')}`}
                    className="mt-1 block text-muted-foreground hover:text-primary"
                  >
                    {phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-heading">Email</h3>
                  <a 
                    href="mailto:hello@restaurant.com"
                    className="mt-1 block text-muted-foreground hover:text-primary"
                  >
                    hello@restaurant.com
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Google Maps Placeholder */}
            <div className="overflow-hidden rounded-xl border border-border bg-muted">
              {/* Embedded Google Maps iframe placeholder */}
              <div className="flex aspect-[4/3] items-center justify-center bg-muted lg:aspect-auto lg:h-full">
                <div className="text-center">
                  <MapPin className="mx-auto mb-2 h-8 w-8 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    Google Maps Embed<br />
                    {shopName}<br />
                    123 Main Street, {city}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section className="border-t border-border bg-card py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-heading">
              Hours of Operation
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Dine-In */}
            <Card className="border-0 bg-background shadow-md">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-4 font-serif text-xl font-semibold text-heading">
                  Dine-In
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex justify-between">
                    <span>Monday - Thursday</span>
                    <span>11am - 9pm</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Friday - Saturday</span>
                    <span>11am - 10pm</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>10am - 8pm</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Takeout */}
            <Card className="border-0 bg-background shadow-md">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-4 font-serif text-xl font-semibold text-heading">
                  Takeout
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex justify-between">
                    <span>Monday - Thursday</span>
                    <span>11am - 8:30pm</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Friday - Saturday</span>
                    <span>11am - 9:30pm</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>10am - 7:30pm</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Delivery */}
            <Card className="border-0 bg-background shadow-md">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-4 font-serif text-xl font-semibold text-heading">
                  Delivery
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex justify-between">
                    <span>Monday - Thursday</span>
                    <span>5pm - 8:30pm</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Friday - Saturday</span>
                    <span>5pm - 9:30pm</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>5pm - 7:30pm</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Parking & Accessibility */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-0 bg-card shadow-md">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Car className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 font-serif text-xl font-semibold text-heading">
                  Parking
                </h3>
                <p className="text-muted-foreground">
                  Complimentary valet parking is available during dinner hours. Street parking and a public garage are located within one block of the restaurant.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card shadow-md">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Accessibility className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 font-serif text-xl font-semibold text-heading">
                  Accessibility
                </h3>
                <p className="text-muted-foreground">
                  Our restaurant is fully wheelchair accessible with an entrance ramp and accessible restrooms. Please let us know of any special accommodations when making your reservation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export function ContactContent() {
  return (
    <Suspense fallback={<ContactContentSkeleton />}>
      <ContactContentInner />
    </Suspense>
  )
}

function ContactContentSkeleton() {
  return (
    <div className="bg-background pb-24 md:pb-0">
      <div className="bg-heading py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <div className="mx-auto mb-4 h-12 w-48 animate-pulse rounded bg-white/20" />
          <div className="mx-auto h-6 w-64 animate-pulse rounded bg-white/20" />
        </div>
      </div>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-4">
                  <div className="h-12 w-12 animate-pulse rounded-full bg-muted" />
                  <div className="flex-1 space-y-2">
                    <div className="h-5 w-24 animate-pulse rounded bg-muted" />
                    <div className="h-10 w-full animate-pulse rounded bg-muted" />
                  </div>
                </div>
              ))}
            </div>
            <div className="aspect-[4/3] animate-pulse rounded-xl bg-muted" />
          </div>
        </div>
      </section>
    </div>
  )
}
