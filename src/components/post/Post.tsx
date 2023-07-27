import Image from 'next/image'

import { IPost } from '@/types/posts.interface'
import usePopup from '@/hooks/usePostPopup'
import styles from './Post.module.scss'

const Post: React.FC<IPost> = (post) => {
  const { title, text, tags, autor, img_2x, date, views } = post
  const { onOpenPopup } = usePopup()

  return (
    <div
      className={styles.post}
      onClick={() => onOpenPopup(post)}
    >
      <div className={styles.post__image}>
        <Image
          src={img_2x}
          fill
          alt="post-image"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
