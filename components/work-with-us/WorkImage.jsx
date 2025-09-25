import styles from '@/styles/work.module.css'

const WorkImage = ({ imgSrc }) => {
  return (
    <div
      className={styles.workImage}
      style={{
        backgroundImage: `url(${imgSrc})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    />
  )
}

export default WorkImage
