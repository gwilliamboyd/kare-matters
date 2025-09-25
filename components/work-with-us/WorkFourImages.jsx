import styles from '@/styles/work.module.css'
import WorkImage from './WorkImage'

const WorkFourImages = () => {
  return (
    <div className={styles.workImagesWrapper}>
      <WorkImage imgSrc={'/gallery-images/y1-11.png'} />
      <WorkImage imgSrc={'/gallery-images/y2-09.png'} />
      <WorkImage imgSrc={'/gallery-images/y4-01.jpg'} />
      <WorkImage imgSrc={'/gallery-images/y4-14.jpeg'} />
    </div>
  )
}

export default WorkFourImages
