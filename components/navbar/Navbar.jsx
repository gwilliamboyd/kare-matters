import Image from 'next/image'
import styles from '../../styles/navbar.module.css'
// import CTAButton from '../CTAButton'
// import SocialIcon from '../SocialIcon'
// import NavlinkContact from './nav-links/NavlinkContact'
import NavlinkMain from './nav-links/NavlinkMain'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className={`${styles.master}`}>
      <div className={styles.innerContainer}>
        <div className={styles.logoContainer}>
          <Link href={'/'}>
            <Image
              className={styles.logoImage}
              src={'/kare-matters-logo.svg'}
              width={260}
              height={40}
              alt="Becka's House logo"
            />
          </Link>
          <div className={styles.mainContainer}>
            <NavlinkMain
              styles={styles}
              linkText={'About Us'}
              url={'#about-us'}
            />
            <NavlinkMain
              styles={styles}
              linkText={'FAQ'}
              url={'#faq'}
            />
            <NavlinkMain
              styles={styles}
              url={'/gallery'}
              linkText={'Gallery'}
            />
            <NavlinkMain
              styles={styles}
              url={'/testimonials'}
              linkText={'Testimonials'}
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
