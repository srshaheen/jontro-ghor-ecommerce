import type { Metadata } from 'next'
import '../globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ClerkProvider } from '@clerk/nextjs'
export const metadata: Metadata = {
  title: {
    template: '%s - JontroGhor online store',
    default: 'JontroGhor online store'
  },
  description: 'JontroGhor online store, Your one stop shop for all you needs'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <div className='flex min-h-screen flex-col'>
        <Header />
        <main className='flex-1'>{children}</main>
        <Footer />
      </div>
    </ClerkProvider>
  )
}
