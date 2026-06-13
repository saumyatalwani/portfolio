import localFont from 'next/font/local'
import { Noto_Sans } from 'next/font/google'

const generalSans = localFont({
  src: './fonts/GeneralSans-Variable.ttf',
  variable: '--font-general-sans',
  display: 'swap',
})

const notoSans = Noto_Sans({
  variable: '--font-noto-sans',
  display: 'swap',
  preload: false,
})

export { generalSans, notoSans }
