import styles from '@/styles/page.module.css'
import VisionCol from './VisionCol'

const VisionThreeCol = () => {
  return (
    <div className={styles.visionThreeCol}>
      <VisionCol
        paragraph={
          'Listen to your intuition—and don’t settle. Here’s how we design a purpose-filled future that’s even better than your vision.'
        }
        linkText={'See Our Mission'}
        linkUrl={'#'}
      />
      <VisionCol
        paragraph={
          'We help parents come back to life. We’ll handle the paperwork, advocacy, companion care, and transition.'
        }
        linkText={'Work With Us'}
        linkUrl={'#'}
      />
      <VisionCol
        paragraph={
          'Want to know our inspiration for championing beautiful futures? See the passion that propelled us.'
        }
        linkText={'Read More About Us'}
        linkUrl={'#'}
      />
    </div>
  )
}

export default VisionThreeCol
