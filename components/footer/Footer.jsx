import styles from '@/styles/footer.module.css'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import NavlinkMain from '../navbar/nav-links/NavlinkMain'
import SocialIcon from '../SocialIcon'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const Footer = () => {
  return (
    <footer className={styles.footerMaster}>
      <div className={styles.footerMaster}>
        <div className={styles.footerWrapper}>
          <div className={`${poppins.className} ${styles.contactWrapper}`}>
            <Image
              src={'/kare-matters-logo.svg'}
              width={322}
              height={50}
              alt="Becka's House Logo"
            />
            <a
              className={styles.contactText}
              href='mailto:contact@beckashouse.com'>
              contact@beckashouse.com
            </a>
            <a
              className={styles.contactText}
              href='tel:214-952-8865'>
              214-952-8865
            </a>
          </div>
          <div className={`${poppins.className} ${styles.linksWrapper}`}>
            <NavlinkMain
              styles={styles}
              url={'#about-us'}
              linkText={'About'}
            />
            <NavlinkMain
              styles={styles}
              url={'#faq'}
              linkText={'FAQ'}
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
          <div className={styles.socialsWrapper}>
            <SocialIcon
              styles={styles}
              url={'https://www.facebook.com'}
              fillColor={'#FFFFFF'}
              site={'facebook'}
              dimensions={60}
            />
            <SocialIcon
              styles={styles}
              url={'https://www.instagram.com'}
              fillColor={'#FFFFFF'}
              site={'instagram'}
              dimensions={60}
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
