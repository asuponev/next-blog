import Image from 'next/image'

import useMenu from '@/hooks/useMenu'
import styles from '../Header.module.scss'

const HeaderBurger: React.FC = () => {
  const { onOpenMenu } = useMenu()

  return (
    <div
      className={styles.header__burger}
      onClick={onOpenMenu}
    >
      <Image
        src="/menu-icon.svg"
        fill
        alt="menu-icon"
      />
    </div>
  )
}

export default HeaderBurger
