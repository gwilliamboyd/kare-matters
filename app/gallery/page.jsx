import styles from '@/styles/gallery.module.css'
import fs from 'fs'
// import Image from 'next/image'
import path from 'path'
// import { useMemo } from 'react'
import Image from 'next/image'

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
