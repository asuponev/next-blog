import Image from 'next/image'

import { IPost } from '@/types/posts.interface'
import styles from './Post.module.scss'

const Post: React.FC<IPost> = ({
  title,
  text,
  tags,
  autor,
  img_2x,
  date,
  views,
}) => {
  return (
    <div className={styles.post}>
      <div className={styles.post__image}>
        <Image
          src={img_2x}
          fill
          alt="post-image"
        />
      </div>
      <p className={styles.post__tags}>{tags}</p>
      <p className={styles.post__title}>{title}</p>
      <div className={styles.post__meta}>
        <span className={styles.post__author}>{autor}</span>
        <span className={styles.post__divider} />
        <span>{date}</span>
        <span className={styles.post__divider} />
        <span>{views} Views</span>
      </div>
      <p className={styles.post__text}>{text}</p>
    </div>
  )
}

export default Post
