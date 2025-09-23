import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const NavlinkContact = ({ styles, linkText, url }) => {
  return (
    <span className={`${poppins.className} ${styles.navLinkContact}`}>
      <a href={url}>{linkText}</a>
    </span>
  )
}

export default NavlinkContact
