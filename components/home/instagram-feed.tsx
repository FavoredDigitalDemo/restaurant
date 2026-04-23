import Image from 'next/image'
import { Instagram } from 'lucide-react'

const posts = [
  { src: '/restaurant/instagram-1.jpg', caption: 'Fresh ingredients, crafted with love' },
  { src: '/restaurant/instagram-2.jpg', caption: 'Weekend brunch vibes' },
  { src: '/restaurant/instagram-3.jpg', caption: 'Our signature cocktails' },
  { src: '/restaurant/instagram-4.jpg', caption: 'Behind the scenes' },
  { src: '/restaurant/instagram-5.jpg', caption: 'Date night perfection' },
  { src: '/restaurant/instagram-6.jpg', caption: 'Sweet endings' },
]

export function InstagramFeed() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-primary">
            <Instagram className="h-6 w-6" />
            <span className="font-medium">Follow us on Instagram</span>
          </div>
          <h2 className="font-serif text-3xl font-bold text-heading sm:text-4xl">
            @yourrestaurant
          </h2>
        </div>

        {/* Instagram Basic Display API placeholder slots */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {posts.map((post, index) => (
            <a
              key={index}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              {/* Image placeholder - 400x400 */}
              <Image
                src={post.src}
                alt={post.caption}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 16vw"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                <Instagram className="h-8 w-8 text-white" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
