import PageHero from '@/components/heroes/PageHero'
import WorkFourImages from '@/components/work-with-us/WorkFourImages'
import WorkIconLine from '@/components/work-with-us/WorkIconLine'
import styles from '@/styles/work.module.css'

const page = () => {
  return (
    <div className={styles.workMaster}>
      <PageHero heading={'Work With Us'} />
      <div className={styles.workWrapper}>
        <div className={styles.workWrapperContainer}>
          <div className={styles.workWrapperInner}>
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
              <p className={styles.workParagraph}>
                Locating housing or creating a personalized companion care home
                feels <em>intimidating</em>.
              </p>
              <p className={styles.workParagraph}>
                Maybe you’re thinking,{' '}
                <em className={styles.workLineEm}>
                  “I wouldn’t know where to start.”
                </em>
              </p>
              <p className={styles.workParagraph}>
                But intuitively you know—there’s nothing you wouldn’t do to
                ensure a <em>healthy future</em> for your loved one.
              </p>
            </div>
            <WorkFourImages />
          </div>
          <p className={styles.workParagraph}>
            At <em style={{ color: '#EDA0A0' }}>KARE MATTERS</em>, we combine
            our professional experience to create done-for-you consulting—so you
            can design a beautiful future - on your terms.
          </p>
        </div>
      </div>
    </div>
  )
}

export default page
