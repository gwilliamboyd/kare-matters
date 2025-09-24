import styles from '@/styles/page.module.css'
// icon import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle as faCircleRegular } from '@fortawesome/free-regular-svg-icons'

const BulletPoint = ({ text }) => {
  return (
    <li className={styles.bulletPoint}>
      <FontAwesomeIcon
        className={styles.circleIcon}
        icon={faCircleRegular}
      />
      <span>{text}</span>
    </li>
  )
}

export default BulletPoint
