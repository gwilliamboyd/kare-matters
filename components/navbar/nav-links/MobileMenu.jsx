import styles from '@/styles/navbar.module.css'
import NavlinkMain from './NavlinkMain'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import NavlinkContact from './NavlinkContact'
import SocialIcon from '@/components/SocialIcon'

const MobileMenu = ({ menuOpen, setMenuOpen, mobileMenuHandler }) => {
  return (
    <div className={styles.mobileMenuMaster}>
      <ul className={styles.mobileMenuContainer}>
        <li className={styles.xIcon}>
          <FontAwesomeIcon
            icon={faXmark}
            onClick={mobileMenuHandler}
          />
        </li>
        <li className={styles.mobileMenuLink}>
          <NavlinkMain
            styles={styles}
            linkText={'About Us'}
            url={'/about-us'}
            mobileMenuHandler={mobileMenuHandler}
          />
        </li>
        <li className={styles.mobileMenuLink}>
          <NavlinkMain
            styles={styles}
            linkText={'Let us Help'}
            url={'/let-us-help'}
            mobileMenuHandler={mobileMenuHandler}
          />
        </li>
        <li className={styles.mobileMenuLink}>
          <NavlinkMain
            styles={styles}
            linkText={'Gallery'}
            url={'/gallery'}
            mobileMenuHandler={mobileMenuHandler}
          />
        </li>
      </ul>
      <ul className={styles.mobileMenuContact}>
        <li className={styles.mobileMenuLink}>
          <NavlinkContact
            styles={styles}
            linkText={'214-952-8865'}
            url={'tel:2149528865'}
          />
        </li>
        <li className={styles.mobileMenuLink}>
          <NavlinkContact
            styles={styles}
            linkText={'contact@beckashouse.com'}
            url={'mailto:contact@beckashouse.com'}
          />
        </li>
      </ul>
      <li className={styles.mobileMenuLink}>
        <div className={styles.socials}>
          <SocialIcon
            styles={styles}
            url={'https://www.facebook.com'}
            fillColor={'#FFFFFF'}
            site={'facebook'}
            dimensions={36}
          />
          <SocialIcon
            styles={styles}
            url={'https://www.instagram.com'}
            fillColor={'#FFFFFF'}
            site={'instagram'}
            dimensions={36}
          />
        </div>
      </li>
    </div>
  )
}

export default MobileMenu
