import styles from '@/styles/page.module.css'
import BulletList from './BulletList'
import Image from 'next/image'

const BulletContainer = () => {
  return (
    <div className={styles.bulletContainerMaster}>
      <BulletList />
      <Image
        src={'/gallery-images/year-4/y4-07.jpg'}
        width={800}
        height={600}
        alt='Purpose-driven homes photo'
        style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
      />
    </div>
  )
}

export default BulletContainer
