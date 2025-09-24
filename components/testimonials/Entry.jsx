import styles from '@/styles/testimonials.module.css'
// import entries from './entries/entries.json'

const Entry = ({ index, review, name }) => {
  return (
    <div
      key={index}
      className={styles.entryWrapper}>
      <p className={styles.entryReview}>{review}</p>
      <h4 className={styles.entryName}>{name}</h4>
    </div>
  )
}

export default Entry
