'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from '../../styles/navbar.module.css'
// import CTAButton from '../CTAButton'
// import SocialIcon from '../SocialIcon'
// import NavlinkContact from './nav-links/NavlinkContact'
import NavlinkMain from './nav-links/NavlinkMain'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import NavlinkContact from './nav-links/NavlinkContact'
import SocialIcon from '../SocialIcon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import useIsMobile from '@/hooks/useIsMobile'
import MobileMenu from './nav-links/MobileMenu'

const Navbar = () => {
  // check URL to determine nav color
  const pathName = usePathname()
  const [isHome, setIsHome] = useState(true)

  const isTablet = useIsMobile(1150)
  const isMobile = useIsMobile(576)

  const [menuOpen, setMenuOpen] = useState(false)

  const mobileMenuHandler = () => {
    if (!menuOpen) setMenuOpen(true)
    else setMenuOpen(false)
  }

  useEffect(() => {
    setIsHome(pathName === '/')
  }, [pathName])

  return (
    <nav className={isHome ? styles.master : styles.pageMaster}>
      <div className={styles.innerContainer}>
        <div className={styles.logoContainer}>
          <Link href={'/'}>
            <Image
              className={styles.logoImage}
              src={'/kare-matters-logo.svg'}
              width={isMobile ? 200 : 260}
              height={isMobile ? 21 : 40}
              alt="Becka's House logo"
            />
          </Link>
          {isTablet ? null : (
            <div className={styles.mainContainer}>
              <NavlinkMain
                styles={styles}
                linkText={'About Us'}
                url={'/about-us'}
              />
              <NavlinkMain
                styles={styles}
                linkText={'Let us Help'}
                url={'/let-us-help'}
              />
              <NavlinkMain
                styles={styles}
                url={'/gallery'}
                linkText={'Gallery'}
              />
            </div>
          )}
          <div className={styles.contactContainer}>
            {isTablet ? null : (
              <div className={styles.contactLeft}>
                <NavlinkContact
                  styles={styles}
                  linkText={'214-952-8865'}
                  url={'tel:2149528865'}
                />
                <NavlinkContact
                  styles={styles}
                  linkText={'contact@beckashouse.com'}
                  url={'mailto:contact@beckashouse.com'}
                />
              </div>
            )}
            {isTablet ? null : (
              <div className={styles.socials}>
                {/* <SocialIcon
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
                /> */}
              </div>
            )}
            {isTablet && (
              <FontAwesomeIcon
                className={styles.mobileMenuIcon}
                icon={faBars}
                onClick={mobileMenuHandler}
              />
            )}
            {menuOpen && (
              <MobileMenu
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
                mobileMenuHandler={mobileMenuHandler}
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
