import styles from '@/styles/page.module.css'
import VisionThreeCol from './VisionThreeCol'

const YourVision = () => {
  return (
    <div className={styles.visionMaster}>
      <h3 className={styles.h3}>
        See Your Vision Come to Life — On Your Terms
      </h3>
      <VisionThreeCol />
      <h3
        className={styles.h3}
        style={{ fontWeight: '700', marginTop: '1em' }}>
        Your Peace of Mind is Our Top Priority
      </h3>
    </div>
  )
}

export default YourVision
