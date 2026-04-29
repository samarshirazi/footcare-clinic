import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nirvana Foot Care — Expert Care by Registered Nurses',
  description: 'Professional medical foot care by licensed nurses in Vancouver, BC. Medical pedicures, nail care, callus removal, fungal treatments, and in-home visits. No referral required.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
