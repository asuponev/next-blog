import { PropsWithChildren } from 'react'
import Image from 'next/image'

import BackArea from '@/components/back-area/BackArea'
import styles from './Popup.module.scss'

interface IPostPopup {
  isOpen: boolean
  onClose: () => void
}

const Popup: React.FC<PropsWithChildren<IPostPopup>> = ({
  children,
  isOpen,
  onClose,
}) => {
  return (
    <>
      <div className={styles.popup}>
        <div className={styles.popup__inner}>
          <div className={styles.popup__header}>
            <div
              className={styles.popup__close}
              onClick={onClose}
            >
              <Image
                src="/close-icon.svg"
                fill
                alt="close-search"
              />
            </div>
          </div>
          {children}
        </div>
      </div>
      <BackArea
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  )
}

export default Popup
