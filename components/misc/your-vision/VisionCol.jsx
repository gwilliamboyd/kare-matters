import styles from '@/styles/page.module.css'

const VisionCol = ({ paragraph, linkText, linkUrl }) => {
  return (
    <div className={styles.visionCol}>
      <p className={styles.visionColParagraph}>{paragraph}</p>
      <a
        className={styles.visionLink}
        href={linkUrl}>
        {linkText}
      </a>
    </div>
  )
}

export default VisionCol
