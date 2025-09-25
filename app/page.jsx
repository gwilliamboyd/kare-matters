import HomeHero from '@/components/heroes/HomeHero'
import BulletContainer from '@/components/misc/BulletContainer'
import BulletList from '@/components/misc/BulletList'
import PinkDivider from '@/components/misc/PinkDivider'
import YourVision from '@/components/misc/your-vision/YourVision'
import styles from '@/styles/page.module.css'

export default function Home() {
  return (
    <main className={styles.homeMaster}>
      <HomeHero />
      <div className={styles.homeDarkWrapper}>
        <h3 className={styles.h3}>
          We Set the Standard for <b>Purpose-Driven</b> Companion Care Homes
        </h3>
        <PinkDivider />
        <h5 className={styles.h5}>
          You envision a safe space where your loved one can…
        </h5>
        <BulletContainer />
        <p className={styles.paragraph}>
          With our tools, resources, and step-by-step guidance, we can help you
          design a future for your loved one that exceeds your expectations.
        </p>
        <h5
          className={styles.h5}
          style={{ fontWeight: '400' }}>
          Explore a{' '}
          <span className={styles.homeLink}>
            Fully Customized Companion Care Home
          </span>
        </h5>
      </div>
      <YourVision />
    </main>
  )
}
