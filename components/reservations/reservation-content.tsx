'use client'

import { Suspense } from 'react'
import { Phone } from 'lucide-react'
import { useShopInfo } from '@/hooks/use-shop-info'

function ReservationContentInner() {
  const { phone } = useShopInfo()

  return (
    <div className="mt-6 rounded-xl border border-border bg-secondary/30 p-6">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
          <Phone className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="font-serif text-lg font-semibold text-heading">
            Large Parties
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            For parties over 10 guests, please call us directly at{' '}
            <a 
              href={`tel:${phone.replace(/\D/g, '')}`}
              className="font-medium text-primary hover:underline"
            >
              {phone}
            </a>
            {' '}to arrange your reservation.
          </p>
        </div>
      </div>
    </div>
  )
}

export function ReservationContent() {
  return (
    <Suspense fallback={<ReservationContentSkeleton />}>
      <ReservationContentInner />
    </Suspense>
  )
}

function ReservationContentSkeleton() {
  return (
    <div className="mt-6 rounded-xl border border-border bg-secondary/30 p-6">
      <div className="flex items-start gap-4">
        <div className="h-10 w-10 animate-pulse rounded-full bg-muted" />
        <div className="flex-1 space-y-2">
          <div className="h-5 w-32 animate-pulse rounded bg-muted" />
          <div className="h-10 w-full animate-pulse rounded bg-muted" />
        </div>
      </div>
    </div>
  )
}
