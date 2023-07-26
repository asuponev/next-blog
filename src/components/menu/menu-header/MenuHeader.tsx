import Image from 'next/image'

import useMenu from '@/hooks/useMenu'
import HeaderLogo from '@/components/header/header-logo/HeaderLogo'
import styles from '../Menu.module.scss'

const MenuHeader: React.FC = () => {
  const { onCloseMenu } = useMenu()

  return (
    <div className={styles.menu__header}>
      <HeaderLogo />
      <div
        className={styles.menu__header__close}
        onClick={onCloseMenu}
      >
        <Image
          src="/close-icon.svg"
          fill
          alt="search"
        />
      </div>
    </div>
  )
}

export default MenuHeader
