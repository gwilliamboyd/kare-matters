import HomeHero from '@/components/heroes/HomeHero'
import BulletList from '@/components/misc/BulletList'
import PinkDivider from '@/components/misc/PinkDivider'
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
        <BulletList />
      </div>
    </main>
  )
}
