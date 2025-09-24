import styles from '@/styles/hero.module.css'

const HomeHero = () => {
  return (
    <div className={styles.homeHeroMaster}>
      <div className={styles.homeHeroWrapper}>
        <h3 className={styles.h3}>
          We Help Design a Future That Your Special Needs Family Member Can
          Exceed Their Expectations and Yours
        </h3>
        <p className={styles.paragraph}>
          You’ve always believed your disabled family member could reach their{' '}
          <b>full potential.</b>
        </p>
        <p className={styles.paragraph}>
          They need an accessible safe space with caregivers and mentors who
          encourage and believe in them as much as you do.
        </p>
        <p className={styles.paragraph}>
          <em>
            <b>We help you design it.</b>
          </em>
        </p>
      </div>
    </div>
  )
}

export default HomeHero
