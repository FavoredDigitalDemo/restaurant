import Image from 'next/image'

const images = [
  { src: '/restaurant/ambiance-1.jpg', alt: 'Restaurant interior with warm lighting' },
  { src: '/restaurant/ambiance-2.jpg', alt: 'Our dedicated kitchen staff' },
  { src: '/restaurant/ambiance-3.jpg', alt: 'Beautifully plated dish' },
  { src: '/restaurant/ambiance-4.jpg', alt: 'Elegant table setting' },
]

export function AmbianceGallery() {
  return (
    <section className="bg-background">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {images.map((image, index) => (
          <div key={index} className="relative aspect-square overflow-hidden">
            {/* Image placeholders - 600x600 */}
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
