'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Suspense } from 'react'
import { ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { useParamLink } from '@/hooks/use-shop-info'

const dishes = [
  {
    name: 'Grilled Ribeye',
    description: 'Prime dry-aged beef with herb butter and seasonal vegetables',
    price: '$42',
    image: '/dish-1.jpg', // 800x600
  },
  {
    name: 'Pan-Seared Salmon',
    description: 'Wild-caught salmon with citrus glaze and asparagus',
    price: '$36',
    image: '/dish-2.jpg', // 800x600
  },
  {
    name: 'Truffle Risotto',
    description: 'Creamy arborio rice with black truffle and parmesan',
    price: '$28',
    image: '/dish-3.jpg', // 800x600
  },
]

function FeaturedDishesContent() {
  const paramLink = useParamLink()

  return (
    <section className="bg-card py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-heading sm:text-4xl">
            Featured Dishes
          </h2>
          <p className="text-muted-foreground">
            Discover our chef&apos;s signature creations
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {dishes.map((dish) => (
            <Card 
              key={dish.name} 
              className="group overflow-hidden border-0 bg-background shadow-md transition-shadow duration-150 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* Image placeholder - 800x600 */}
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-2 flex items-start justify-between gap-2">
                  <h3 className="font-serif text-xl font-semibold text-heading">
                    {dish.name}
                  </h3>
                  <span className="shrink-0 font-sans text-lg font-semibold tabular-nums text-primary">
                    {dish.price}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {dish.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            href={paramLink('/menu')}
            className="inline-flex items-center gap-2 font-medium text-primary transition-colors hover:text-primary/80"
          >
            View full menu
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export function FeaturedDishes() {
  return (
    <Suspense fallback={<FeaturedDishesSkeleton />}>
      <FeaturedDishesContent />
    </Suspense>
  )
}

function FeaturedDishesSkeleton() {
  return (
    <section className="bg-card py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mx-auto mb-4 h-10 w-56 animate-pulse rounded bg-muted" />
          <div className="mx-auto h-5 w-64 animate-pulse rounded bg-muted" />
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="overflow-hidden rounded-xl bg-background shadow-md">
              <div className="aspect-[4/3] animate-pulse bg-muted" />
              <div className="p-6">
                <div className="mb-2 h-6 w-32 animate-pulse rounded bg-muted" />
                <div className="h-10 w-full animate-pulse rounded bg-muted" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
