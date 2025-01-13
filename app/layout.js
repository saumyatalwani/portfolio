import "./globals.css";
import { generalSans, notoSans } from "./fonts";
import Footer from "@/components/custom/footer"

export const metadata = {
  title: "Saumya Talwani",
  metadataBase: new URL(`https://me.techsaumya.in`),
  description: "Explore Saumya Talwani's portfolio: A passionate Computer Science student and skilled developer blending creativity and tech expertise to craft innovative web solutions.",
  authors: [{ name: 'Saumya Talwani', url: 'https://me.techsaumya.in/' }],
  generator: 'Next.js',
  creator: 'Saumya Talwani',
  keywords: ['next.js', 'react', 'javascript','web developer','portfolio','saumya','saumya talwani','talwani'],
  publisher: 'TechSaumya',
  openGraph: {
    title: "Saumya Talwani's Portfolio",
    description: "Explore Saumya Talwani's portfolio: A passionate Computer Science student and skilled developer blending creativity and tech expertise to craft innovative web solutions.",
    url: 'https://me.techsaumya.in/',
    siteName: "Saumya Talwani's Portfolio",
    locale: 'en_IN',
    type: 'website',
  },

  alternates: {
      canonical: `./`,
    },
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" className={`${generalSans.variable} ${notoSans.variable}`}>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
