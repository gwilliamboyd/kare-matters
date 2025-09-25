import styles from '@/styles/work.module.css'

const WorkTopContainer = () => {
  return (
    <div className={styles.workTopContainer}>
      <div className={styles.workLines}>
        <WorkIconLine
          imgSrc={'check-icon.png'}
          text={'Paperwork?'}
          blueText={'Check.'}
          altText={'Checkmark icon'}
        />
        <WorkIconLine
          imgSrc={'peace-icon.png'}
          text={'Peace of Mind?'}
          blueText={'Already on it.'}
          altText={'Checkmark icon'}
        />
      </div>
      <WorkFourImages />
    </div>
  )
}

export default WorkTopContainer
