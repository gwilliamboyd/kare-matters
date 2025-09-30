import styles from '@/styles/gallery.module.css'
import fs from 'fs'
import path from 'path'
import Image from 'next/image'

export const metadata = {
  title:
    'Gallery | Designing Beautiful Futures for Adults with Special Needs | Kare Matters LLC',
  description:
    'Are you a parent/legal guardian/sibling/friend of an adult with special needs? We specialize in helping families determine the best options for custom supported caregiving and/or companion care housing for people living with a disability—allowing you to breathe a sigh of relief.',
}

const page = () => {
  // auto-detect images in folder
  // set directory
  const imgDir = path.join(process.cwd(), 'public/gallery-images/')
  // define files
  const files = fs.readdirSync(imgDir)
  const images = files.filter(file =>
    /\.(png|jpe?g|gif|webp|avif|svg)$/i.test(file)
  )

  return (
    <main className={styles.galleryMaster}>
      <div className={styles.galleryContainer}>
        {images.map((img, key) => {
          return (
            <Image
              key={key}
              className={styles.galleryImg}
              src={`/gallery-images/${img}`}
              // loading component
              placeholder='blur'
              blurDataURL='/placeholder.png'
              // size still from CSS
              width={800}
              height={600}
              unoptimized
              // maintains masonry image sizes
              style={{ width: '100%', height: 'auto' }}
              alt={img}
            />
          )
        })}
      </div>
    </main>
  )
}

export default page
