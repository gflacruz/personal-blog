import Link from "next/link"
import styles from "./card.module.css"
import Image from "next/image"

const Card = ({key, item}) => {
  return (
    <div className={styles.container} key={key}>
        {item.img && <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
        </div>}
          <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>{item.createdAt.substr(0, 10)} - </span>
                <span className={styles.category}>{item.catSlug}</span>
            </div>
            <Link href={`posts/${item.slug}`}>
                <h1>{item.title}</h1>
            </Link>
            <p className={styles.desc}>{item.desc.substr(0, 60)}
            </p>
            <Link href={`posts/${item.slug}`} className={styles.link}>Read More</Link>
          </div>
    </div>
  )
}

export default Card