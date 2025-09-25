import AboutLine from '@/components/about-us/AboutLine'
import PageHero from '@/components/heroes/PageHero'
import BulletPoint from '@/components/misc/BulletPoint'
import InteriorH2 from '@/components/misc/InteriorH2'
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
      <div className={styles.workDarkContainer}>
        <div className={styles.workDarkWrapper}>
          <InteriorH2
            heading={'Life-Changing Resources You Didn’t Know You Needed'}
          />
          <div className={styles.workInfo}>
            <AboutLine
              text={
                'We’ve been in special needs advocacy for a long time—and our journey has taught us to dig deep to find the right strategies and resources for every family.'
              }
            />
            <p
              className={styles.workParagraph}
              style={{ fontWeight: '700', marginTop: '1em' }}>
              Here’s what you can expect to find in our custom packages
            </p>
            <BulletPoint
              text={
                'Resources to connect you with other special needs families in your area.'
              }
            />
            <BulletPoint
              text={'Expert decision-making for exhausted parents.'}
            />
            <BulletPoint
              text={
                'Daily programs that create structured routines that boost your child’s confidence and independence.'
              }
            />
            <BulletPoint
              text={'Advocacy and consulting for maximum government benefits.'}
            />
            <BulletPoint text={'Future-focused peace of mind.'} />
            <BulletPoint
              text={'Medical insurance optimization and consulting.'}
            />
            <BulletPoint
              text={
                'Cultivating abundance for you and your loved one with special needs.'
              }
            />
            <BulletPoint
              text={
                'Guidance for hiring loving caregivers, mentors and guardians.'
              }
            />
            <BulletPoint
              text={
                'Easy transitions from school to home, work, and other activities.'
              }
            />
            <p
              style={{ fontWeight: '700', marginTop: '1em', color: '#FFFFFF' }}>
              <em>...and so much more.</em>
            </p>
            <a
              className={styles.workLink}
              href='#'>
              Your Long Awaited Sigh of Relief
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
