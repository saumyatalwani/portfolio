import { ReactNode } from 'react'
import Navbar from '@/components/custom/navbar'

export const metadata = {
  title: 'About | Saumya Talwani',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar className="" />
      {children}
    </>
  )
}
