import { ReactNode } from 'react'
import Navbar from '@/components/custom/navbar'

export const metadata = {
  title: 'Work | Saumya Talwani',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar className="" />
      {children}
    </>
  )
}
