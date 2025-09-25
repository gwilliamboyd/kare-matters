import styles from '@/styles/about.module.css'

const AboutLine = ({ text }) => {
  return <p className={styles.aboutLine}>{text}</p>
}

export default AboutLine
