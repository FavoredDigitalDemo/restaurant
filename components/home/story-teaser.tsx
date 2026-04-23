'use client'

import Link from 'next/link'
import { Suspense } from 'react'
import { ArrowRight } from 'lucide-react'
import { useParamLink } from '@/hooks/use-shop-info'

function StoryTeaserContent() {
  const paramLink = useParamLink()

  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-6 font-serif text-3xl font-bold text-heading sm:text-4xl">
          Our Story
        </h2>
        <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
          Born from a passion for authentic flavors and a love for bringing people together, 
          our restaurant has been serving the community for over two decades. Every dish tells 
          a story of tradition, craftsmanship, and the finest locally-sourced ingredients.
        </p>
        <Link 
          href={paramLink('/about')}
          className="inline-flex items-center gap-2 font-medium text-primary transition-colors hover:text-primary/80"
        >
          Read our full story
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}

export function StoryTeaser() {
  return (
    <Suspense fallback={<StoryTeaserSkeleton />}>
      <StoryTeaserContent />
    </Suspense>
  )
}

function StoryTeaserSkeleton() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <div className="mx-auto mb-6 h-10 w-48 animate-pulse rounded bg-muted" />
        <div className="mx-auto mb-8 h-24 w-full animate-pulse rounded bg-muted" />
        <div className="mx-auto h-6 w-40 animate-pulse rounded bg-muted" />
      </div>
    </section>
  )
}
