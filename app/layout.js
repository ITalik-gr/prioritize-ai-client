import { Inter } from 'next/font/google'
import '../app/styles/globals.css'
import '../app/styles/base.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Prioritize AI',
  description: 'Created by italik',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
