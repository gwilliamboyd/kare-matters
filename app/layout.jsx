import Footer from '@/components/footer/Footer'
import FooterSocket from '@/components/footer/FooterSocket'
import Navbar from '@/components/navbar/Navbar'
import NavbarSocket from '@/components/navbar/NavbarSocket'
import TestimonialsContainer from '@/components/testimonials/TestimonialsContainer'
import { Poppins } from 'next/font/google'
import '@/styles/globals.css'

export const metadata = {
  title:
    'Designing Beautiful Futures for Adults with Special Needs | Kare Matters LLC',
  description:
    'Are you a parent/legal guardian/sibling/friend of an adult with special needs? We specialize in helping families determine the best options for custom supported caregiving and/or companion care housing for people living with a disability—allowing you to breathe a sigh of relief.',
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        {/* <NavbarSocket /> */}
        <Navbar />
        {children}
        <TestimonialsContainer />
        <Footer />
        <FooterSocket />
      </body>
    </html>
  )
}
