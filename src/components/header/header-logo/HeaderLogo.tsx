import Image from 'next/image'

import styles from '../Header.module.scss'

const HeaderLogo: React.FC = () => {
  return (
    <div className={styles.header__logo}>
      <Image
        src="/logo.svg"
        fill
        alt="logo"
      />
    </div>
  )
}

export default HeaderLogo
