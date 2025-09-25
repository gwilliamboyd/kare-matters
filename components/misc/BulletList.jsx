import styles from '@/styles/page.module.css'
import BulletPoint from './BulletPoint'

const BulletList = () => {
  return (
    <ul className={styles.bulletList}>
      <BulletPoint text={'Discover their independence.'} />
      <BulletPoint
        text={'Thrive in an accessible environment designed just for them.'}
      />
      <BulletPoint
        text={
          'Feel encouraged to use their gifts and uncover more talents to benefit the world around them.'
        }
      />
      <BulletPoint text={'Build strong life-long friendships.'} />
      <BulletPoint text={'Receive Godly counsel and regular Bible study.'} />
      <BulletPoint text={'Regularly learn new skills.'} />
      <BulletPoint text={'Participate in daily activities.'} />
      <BulletPoint text={'Build a sense of purpose.'} />
    </ul>
  )
}

export default BulletList
