import styles from '@/styles/testimonials.module.css'
import entries from './entries/entries.json'
import { Open_Sans } from 'next/font/google'

const open_sans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const Entry = ({ index, review, name }) => {
  return (
    <div
      key={index}
      className={`${open_sans.className} ${styles.entryWrapper}`}>
      <p className={styles.entryReview}>{review}</p>
      <h4 className={styles.entryName}>{name}</h4>
    </div>
  )
}

export default Entry
