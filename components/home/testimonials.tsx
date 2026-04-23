import { Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const testimonials = [
  {
    quote: "An absolutely incredible dining experience. The flavors were perfectly balanced and the service was impeccable. We'll definitely be back!",
    name: 'Sarah M.',
    rating: 5,
    source: 'Google',
  },
  {
    quote: "Best restaurant in the city! The truffle risotto is to die for. The ambiance is warm and inviting - perfect for date night.",
    name: 'Michael R.',
    rating: 5,
    source: 'Yelp',
  },
  {
    quote: "From appetizers to dessert, every dish was a masterpiece. The staff made us feel like family. Highly recommend!",
    name: 'Emily K.',
    rating: 5,
    source: 'Google',
  },
]

export function Testimonials() {
  return (
    <section className="bg-card py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-heading sm:text-4xl">
            What Our Guests Say
          </h2>
          <p className="text-muted-foreground">
            Real reviews from our valued customers
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-0 bg-background shadow-md"
            >
              <CardContent className="p-6">
                {/* Star Rating */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="mb-4 text-foreground">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Attribution */}
                <div className="flex items-center justify-between">
                  <span className="font-medium text-heading">{testimonial.name}</span>
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                    {testimonial.source}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
