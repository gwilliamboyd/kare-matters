import AboutInfo from '@/components/about-us/AboutInfo'
import PageHero from '@/components/heroes/PageHero'
import InteriorH2 from '@/components/misc/InteriorH2'
import PinkDivider from '@/components/misc/PinkDivider'
import styles from '@/styles/about.module.css'

const page = () => {
  return (
    <main className={styles.aboutMaster}>
      <PageHero heading={'About Us'} />
      <div className={styles.aboutDarkWrapper}>
        <InteriorH2 heading={'Your Peace of Mind Is Our Top Priority'} />
        <AboutInfo />
      </div>
    </main>
  )
}

export default page
