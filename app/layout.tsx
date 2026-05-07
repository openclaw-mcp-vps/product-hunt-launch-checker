import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Product Hunt Launch Checker — Validate Your Launch Strategy',
  description: 'Analyze optimal launch timing, hunter networks, and competitor patterns to maximize your Product Hunt success.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="74280dde-4a8e-46a2-88e7-1443b3feea36"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
