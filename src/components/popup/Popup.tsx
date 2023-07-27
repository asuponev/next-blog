import { PropsWithChildren } from 'react'

import BackArea from '@/components/back-area/BackArea'
import SvgRender from '@/components/svg-render/SvgRender'
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
              <SvgRender iconName='close' />
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
