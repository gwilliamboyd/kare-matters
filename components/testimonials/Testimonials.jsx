'use client'
import Entry from './Entry'

const Testimonials = ({ currentIndex, setCurrentIndex, entries }) => {
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
