'use client'
import styles from '@/styles/testimonials.module.css'
import entries from './entries/entries.json'
import Testimonials from './Testimonials'
// FontAwesome chevron icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

const TestimonialsContainer = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const entryHandler = operation => {
    // prevent setting index < 0
    if (operation === '-' && currentIndex - 1 < 0) {
      return
    }
    // prevent setting index greater than array length
    else if (operation === '+' && currentIndex + 1 > entries.length - 1) {
      return
    }

    // determine whether to increment or decrement
    operation === '+'
      ? setCurrentIndex(currentIndex + 1)
      : setCurrentIndex(currentIndex - 1)
  }

  // auto scroll testimonials every 8 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1 < entries.length ? prev + 1 : 0))
    }, 8000)

    // clear timer when testimonial changes
    return () => clearInterval(interval)
  }, [entries.length])

  return (
    <div className={styles.testimonialsMaster}>
      <div className={styles.testimonialsWrapper}>
        <h1 className={styles.testimonialsHeader}>Testimonials</h1>
        <div className={styles.testimonialsInnerWrapper}>
          {/* Previous testimonial */}
          <FontAwesomeIcon
            onClick={() => entryHandler('-')}
            className={styles.chevronIcon}
            icon={faChevronLeft}
          />
          {/* Entries section */}
          <Testimonials
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            entries={entries}
          />
          {/* Next testimonial */}
          <FontAwesomeIcon
            onClick={() => entryHandler('+')}
            className={styles.chevronIcon}
            icon={faChevronRight}
          />
        </div>
      </div>
    </div>
  )
}

export default TestimonialsContainer
