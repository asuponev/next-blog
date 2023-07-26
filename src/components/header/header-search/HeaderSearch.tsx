import Image from 'next/image'

import styles from '../Header.module.scss'

const HeaderSearch: React.FC = () => {
  return (
    <div className={styles.header__search}>
      <Image
        src="/search-icon.svg"
        fill
        alt="search"
      />
    </div>
  )
}

export default HeaderSearch
