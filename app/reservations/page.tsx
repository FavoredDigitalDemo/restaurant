import { Metadata } from 'next'
import Image from 'next/image'
import { ReservationContent } from '@/components/reservations/reservation-content'

export const metadata: Metadata = {
  title: 'Reservations | Book Your Table',
  description: 'Reserve your table for an unforgettable dining experience. Private dining and special event inquiries welcome.',
}

export default function ReservationsPage() {
  return (
    <div className="bg-background pb-24 md:pb-0">
      {/* Header */}
      <div className="bg-heading py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-4 font-serif text-4xl font-bold text-white sm:text-5xl">
            Reservations
          </h1>
          <p className="mx-auto max-w-2xl text-white/80">
            Join us for an unforgettable dining experience
          </p>
        </div>
      </div>

      {/* Reservation Widget & Photos */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            {/* GloriaFood Reservation Widget */}
            <div>
              <h2 className="mb-6 font-serif text-2xl font-bold text-heading">
                Book a Table
              </h2>
              {/* GLORIAFOOD_RESERVATION_WIDGET */}
              <div className="rounded-xl border border-border bg-card p-8 shadow-md">
                <p className="mb-4 text-center text-muted-foreground">
                  GloriaFood Table Reservation Widget
                </p>
                <div className="flex h-64 items-center justify-center rounded-lg bg-muted">
                  <span className="text-sm text-muted-foreground">
                    Reservation form will appear here
                  </span>
                </div>
              </div>

              {/* Large Parties Note */}
              <ReservationContent />
            </div>

            {/* Dining Room Photos */}
            <div className="space-y-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                {/* Dining room photo - 800x600 */}
                <Image
                  src="/dining-room-1.jpg"
                  alt="Main dining room with elegant table settings"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                {/* Dining room photo - 800x600 */}
                <Image
                  src="/dining-room-2.jpg"
                  alt="Private dining area with warm lighting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Private Dining Section */}
      <section className="border-t border-border bg-card py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-heading">
              Private Dining & Events
            </h2>
            <p className="mb-8 text-muted-foreground">
              Celebrate your special occasions with us. From intimate dinners to large gatherings, we create memorable experiences.
            </p>
          </div>

          {/* Private Dining Inquiry Form */}
          <form className="space-y-6 rounded-xl border border-border bg-background p-8 shadow-md">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="date" className="mb-2 block text-sm font-medium text-foreground">
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label htmlFor="partySize" className="mb-2 block text-sm font-medium text-foreground">
                  Party Size
                </label>
                <input
                  type="number"
                  id="partySize"
                  name="partySize"
                  min="1"
                  required
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Number of guests"
                />
              </div>
            </div>
            <div>
              <label htmlFor="occasion" className="mb-2 block text-sm font-medium text-foreground">
                Occasion
              </label>
              <select
                id="occasion"
                name="occasion"
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option value="">Select an occasion</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="corporate">Corporate Event</option>
                <option value="wedding">Wedding/Rehearsal</option>
                <option value="holiday">Holiday Gathering</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Tell us about your event..."
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
