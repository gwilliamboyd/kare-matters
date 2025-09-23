import styles from '@/styles/footer.module.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const FooterSocket = () => {
  return (
    <div className={`${poppins.className} ${styles.footerSocketMaster}`}>
      <div className={styles.footerSocketWrapper}>
        <p className={styles.footerSocketText}>
          © 2025 Kare Matters, LLC | All Rights Reserved
        </p>
        <p className={styles.footerSocketText}>
          Site by Henry Winget and G William Boyd
        </p>
      </div>
    </div>
  )
}

export default FooterSocket
