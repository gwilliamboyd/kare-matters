import styles from '@/styles/about.module.css'
import AboutLine from './AboutLine'

const AboutInfo = () => {
  return (
    <div className={styles.aboutInfo}>
      <AboutLine
        text={
          'We became experts in advocating needs for our special needs family member and designing her beautiful future out of necessity.'
        }
      />
      <AboutLine
        text={
          'After our niece Becka, was born with porencephaly, we found ourselves navigating an entirely new reality and becoming life-long advocates for her.'
        }
      />
      <AboutLine
        text={
          'Like you, we experienced all the unique joys and challenges of determining a purpose-filled future for her.'
        }
      />
      <AboutLine
        text={
          'We cheered as Becka made friends, learned new skills, and gained independence on her terms with support.'
        }
      />
      <AboutLine
        text={
          'And we worried (a lot) about her quality of life and what would happen after we were gone.'
        }
      />
      <AboutLine
        text={
          'We needed to guarantee Becka had a permanent, safe, accessible, and loving home where she could thrive.'
        }
      />
      <AboutLine
        text={
          'To our shock, these simple standards of living felt impossible to find.'
        }
      />
      <h5 className={styles.h5}>
        We couldn’t find a single day program or supported residential facility
        that met her needs and our standards.
      </h5>
      <h5 className={styles.h5Pink}>So we created our own.</h5>
      <AboutLine
        text={
          'Now, we work alongside families like yours to help build daily structures and customized housing that meets the unique emotional, physical, and spiritual needs of your loved one.'
        }
      />
      <h5 className={styles.h5}>
        Need proof?{' '}
        <a
          className={styles.h5Pink}
          href='#'>
          See Becka’s House
        </a>
      </h5>
    </div>
  )
}

export default AboutInfo
