import styles from '@/styles/hero.module.css'

const PageHero = ({ heading }) => {
  return (
    <div className={styles.pageHeroMaster}>
      <h1 className={styles.pageHeroHeading}>{heading}</h1>
    </div>
  )
}

export default PageHero
