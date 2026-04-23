'use client'

import { Suspense } from 'react'
import { ShoppingBag, CalendarDays } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useShopInfo } from '@/hooks/use-shop-info'
import GloriaOrderButton from '@/components/GloriaOrderButton'
import GloriaReserveButton from '@/components/GloriaReserveButton'

function HeroContent() {
  const { shopName, city } = useShopInfo()

  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
      {/* Background Image Placeholder - 1920x1080 atmospheric restaurant photo */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/60 via-neutral-900/40 to-neutral-900/70">
        <div 
          className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/ambiance-1.jpg')`,
            backgroundColor: '#292524',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative flex h-full items-center justify-center px-4">
        <div className="max-w-3xl text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl text-balance">
            Welcome to {shopName}
          </h1>
          <p className="mb-8 text-lg text-white/90 sm:text-xl md:text-2xl">
            A culinary experience in the heart of {city}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* GLORIAFOOD_ORDER_WIDGET */}
            <GloriaOrderButton 
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto"
            />
            {/* GLORIAFOOD_RESERVATION_WIDGET */}
            <GloriaReserveButton 
              className="w-full border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-foreground sm:w-auto"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-8 w-5 rounded-full border-2 border-white/50 p-1">
          <div className="h-2 w-1 rounded-full bg-white/70 mx-auto" />
        </div>
      </div>
    </section>
  )
}

export function Hero() {
  return (
    <Suspense fallback={<HeroSkeleton />}>
      <HeroContent />
    </Suspense>
  )
}

function HeroSkeleton() {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden bg-neutral-800">
      <div className="flex h-full items-center justify-center">
        <div className="max-w-3xl text-center">
          <div className="mx-auto mb-4 h-16 w-96 animate-pulse rounded bg-white/20" />
          <div className="mx-auto mb-8 h-8 w-64 animate-pulse rounded bg-white/20" />
          <div className="flex justify-center gap-4">
            <div className="h-12 w-36 animate-pulse rounded-lg bg-white/20" />
            <div className="h-12 w-36 animate-pulse rounded-lg bg-white/20" />
          </div>
        </div>
      </div>
    </section>
  )
}
