'use client'
import styles from '@/styles/testimonials.module.css'
import Entry from './Entry'
// import entries from './entries/entries.json'
import { useState, useEffect } from 'react'

const Testimonials = ({ currentIndex, setCurrentIndex, entries }) => {
  /* const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1 < entries.length ? prev + 1 : 0))
    }, 8000)

    return () => clearInterval(interval)
  }, [entries.length]) */

  return (
    <>
      <Entry
        index={currentIndex}
        review={entries[currentIndex].review}
        name={entries[currentIndex].name}
      />
    </>
  )
}

export default Testimonials
