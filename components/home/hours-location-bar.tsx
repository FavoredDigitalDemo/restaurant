'use client'

import { Suspense } from 'react'
import { MapPin, Phone, Clock } from 'lucide-react'
import { useShopInfo } from '@/hooks/use-shop-info'

function HoursLocationBarContent() {
  const { city, phone } = useShopInfo()

  return (
    <section className="bg-heading py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 text-center md:grid-cols-3 md:text-left">
          {/* Location */}
          <div className="flex flex-col items-center gap-3 md:flex-row">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-white">Location</h3>
              <p className="text-white/80">123 Main Street, {city}</p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center gap-3 md:flex-row">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-white">Hours</h3>
              <p className="text-white/80">Mon-Sat: 11am-10pm | Sun: 10am-8pm</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center gap-3 md:flex-row">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-white">Call Us</h3>
              <a 
                href={`tel:${phone.replace(/\D/g, '')}`}
                className="text-white/80 transition-colors hover:text-primary"
              >
                {phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function HoursLocationBar() {
  return (
    <Suspense fallback={<HoursLocationBarSkeleton />}>
      <HoursLocationBarContent />
    </Suspense>
  )
}

function HoursLocationBarSkeleton() {
  return (
    <section className="bg-heading py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="h-12 w-12 animate-pulse rounded-full bg-white/10" />
              <div className="space-y-2">
                <div className="h-5 w-24 animate-pulse rounded bg-white/10" />
                <div className="h-4 w-32 animate-pulse rounded bg-white/10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
