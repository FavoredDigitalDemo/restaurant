import { Metadata } from 'next'
import Image from 'next/image'
import { Leaf, Heart, Award } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'About Us | Our Story & Philosophy',
  description: 'Learn about our restaurant\'s founding story, culinary philosophy, and commitment to locally-sourced, sustainable ingredients.',
}

const values = [
  {
    icon: Leaf,
    title: 'Locally Sourced',
    description: 'We partner with local farms and suppliers to bring you the freshest seasonal ingredients.',
  },
  {
    icon: Heart,
    title: 'Made with Love',
    description: 'Every dish is crafted with passion and attention to detail by our dedicated culinary team.',
  },
  {
    icon: Award,
    title: 'Sustainability',
    description: 'We\'re committed to sustainable practices, from sourcing to composting and reducing waste.',
  },
]

const pressLogos = [
  'Food & Wine',
  'Bon Appétit',
  'The New York Times',
  'Eater',
  'James Beard Foundation',
]

export default function AboutPage() {
  return (
    <div className="bg-background pb-24 md:pb-0">
      {/* Header */}
      <div className="bg-heading py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-4 font-serif text-4xl font-bold text-white sm:text-5xl">
            Our Story
          </h1>
          <p className="mx-auto max-w-2xl text-white/80">
            A passion for food, community, and unforgettable experiences
          </p>
        </div>
      </div>

      {/* Origin Story */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto text-muted-foreground">
            <p className="text-lg leading-relaxed">
              What began as a dream in 2005 has blossomed into one of the city&apos;s most beloved dining destinations. Our founders, inspired by their travels through Europe and a deep appreciation for local ingredients, set out to create a space where exceptional food meets genuine hospitality.
            </p>
            <p className="text-lg leading-relaxed">
              From the very beginning, we&apos;ve been committed to building relationships with local farmers, fishermen, and artisan producers. This dedication ensures that every ingredient that enters our kitchen meets our exacting standards for quality and freshness.
            </p>
            <p className="text-lg leading-relaxed">
              Our culinary philosophy is simple: let the ingredients shine. We believe in minimal intervention cooking that respects the natural flavors of each element on the plate. Whether it&apos;s a perfectly seared steak or a delicate vegetable preparation, our goal is always to honor the ingredient.
            </p>
            <p className="text-lg leading-relaxed">
              Over the years, we&apos;ve had the privilege of serving countless guests, from first dates to anniversary celebrations, business dinners to family reunions. Each table tells a story, and we&apos;re honored to be a part of so many special moments.
            </p>
          </div>
        </div>
      </section>

      {/* Chef Spotlight */}
      <section className="bg-card py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              {/* Chef photo placeholder - 800x1000 */}
              <Image
                src="/chef.jpg"
                alt="Executive Chef"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="mb-2 font-serif text-3xl font-bold text-heading sm:text-4xl">
                Chef Maria Rodriguez
              </h2>
              <p className="mb-6 text-lg text-primary">Executive Chef & Co-Founder</p>
              <blockquote className="mb-6 border-l-4 border-primary pl-6 text-xl italic text-muted-foreground">
                &ldquo;Cooking is my language of love. Every dish I create is a conversation with our guests, an invitation to slow down and savor life&apos;s simple pleasures.&rdquo;
              </blockquote>
              <p className="text-muted-foreground">
                With over 20 years of culinary experience spanning three continents, Chef Maria brings a unique perspective to our kitchen. Her classical training, combined with an adventurous spirit, results in dishes that feel both familiar and excitingly new.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold text-heading sm:text-4xl">
            Our Values
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <Card key={value.title} className="border-0 bg-card shadow-md">
                <CardContent className="p-8 text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-3 font-serif text-xl font-semibold text-heading">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Press & Awards */}
      <section className="border-t border-border bg-card py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center font-serif text-2xl font-bold text-heading">
            As Featured In
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {pressLogos.map((logo) => (
              <div key={logo} className="text-lg font-medium text-muted-foreground/60">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
