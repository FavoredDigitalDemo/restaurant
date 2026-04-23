import { Metadata } from 'next'
import { ContactContent } from '@/components/contact/contact-content'

export const metadata: Metadata = {
  title: 'Contact Us | Get in Touch',
  description: 'Find our location, hours of operation, and contact information. We look forward to hearing from you.',
}

export default function ContactPage() {
  return <ContactContent />
}
