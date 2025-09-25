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
    setCurrentIndex(prev => {
      if (operation === '+') {
        return prev + 1 < entries.length ? prev + 1 : 0 // loop forward
      } else {
        return prev - 1 >= 0 ? prev - 1 : entries.length - 1 // loop backward
      }
    })
  }

  // auto scroll testimonials every 8 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1 < entries.length ? prev + 1 : 0))
    }, 8000)

    // clear interval when currentIndex changes → resets timer
    return () => clearInterval(interval)
  }, [currentIndex, entries.length])

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
