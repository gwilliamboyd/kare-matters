import styles from '@/styles/page.module.css'
import PinkDivider from './PinkDivider'

const InteriorH2 = ({ heading }) => {
  return (
    <span className={styles.interiorH2Wrapper}>
      <h2 className={styles.interiorH2}>{heading}</h2>
      <PinkDivider />
    </span>
  )
}

export default InteriorH2
