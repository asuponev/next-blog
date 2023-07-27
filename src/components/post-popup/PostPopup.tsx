import Image from 'next/image'

import usePostPopup from '@/hooks/usePostPopup'
import Popup from '@/components/popup/Popup'
import styles from './PostPopup.module.scss'

const PostPopup: React.FC = () => {
  const { isPopupOpen, post, onClosePopup } = usePostPopup()
  if (!post) return
  const { title, text, tags, autor, img_2x, date, views } = post

  return (
    <Popup
      onClose={onClosePopup}
      isOpen={isPopupOpen}
    >
      <div className={styles['post-popup']}>
        <div className={styles['post-popup__image']}>
          <Image
            src={img_2x}
            fill
            alt="post-image"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 75vw, 50vw"
          />
        </div>
        <div className={styles['post-popup__content']}>
          <p className={styles['post-popup__tags']}>{tags}</p>
          <p className={styles['post-popup__title']}>{title}</p>
          <div className={styles['post-popup__meta']}>
            <span className={styles['post-popup__author']}>{autor}</span>
            <span className={styles['post-popup__divider']} />
            <span>{date}</span>
            <span className={styles['post-popup__divider']} />
            <span>{views} Views</span>
          </div>
          <p className={styles['post-popup__text']}>{text}</p>
        </div>
      </div>
    </Popup>
  )
}

export default PostPopup
