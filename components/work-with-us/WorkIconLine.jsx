import styles from '@/styles/work.module.css'

const WorkIconLine = ({ imgSrc, text, blueText, altText }) => {
  return (
    <div className={styles.workLineWrapper}>
      <img
        src={imgSrc}
        alt={altText}
      />
      <span className={styles.workLineText}>
        {text} <em>{blueText}</em>
      </span>
    </div>
  )
}

export default WorkIconLine
