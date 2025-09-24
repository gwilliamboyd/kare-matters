import styles from '@/styles/page.module.css'
import BulletPoint from './BulletPoint'

const BulletList = () => {
  return (
    <ul className={styles.bulletList}>
      <BulletPoint text={'Discover their independence.'} />
      <BulletPoint text={'Discover their independence.'} />
      <BulletPoint text={'Discover their independence.'} />
    </ul>
  )
}

export default BulletList
