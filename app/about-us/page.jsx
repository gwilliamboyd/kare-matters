import AboutInfo from '@/components/about-us/AboutInfo'
import PageHero from '@/components/heroes/PageHero'
import InteriorH2 from '@/components/misc/InteriorH2'
import PinkDivider from '@/components/misc/PinkDivider'
import styles from '@/styles/about.module.css'

export const metadata = {
  title: 'About Us | Designing Beautiful Futures for Adults with Special Needs',
  description:
    'Are you a parent/legal guardian/sibling/friend of an adult with special needs? We specialize in helping families determine the best options for custom supported caregiving and/or companion care housing for people living with a disability—allowing you to breathe a sigh of relief.',
}

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
