import { Hero } from '@/components/home/hero'
import { StoryTeaser } from '@/components/home/story-teaser'
import { FeaturedDishes } from '@/components/home/featured-dishes'
import { AmbianceGallery } from '@/components/home/ambiance-gallery'
import { Testimonials } from '@/components/home/testimonials'
import { InstagramFeed } from '@/components/home/instagram-feed'
import { HoursLocationBar } from '@/components/home/hours-location-bar'

export default function HomePage() {
  return (
    <>
      <Hero />
      <StoryTeaser />
      <FeaturedDishes />
      <AmbianceGallery />
      <Testimonials />
      <InstagramFeed />
      <HoursLocationBar />
    </>
  )
}
