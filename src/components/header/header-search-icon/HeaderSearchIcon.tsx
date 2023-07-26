import Image from 'next/image'

import useSearch from '@/hooks/useSearch'
import styles from '../Header.module.scss'

const HeaderSearchIcon: React.FC = () => {
  const { onOpenSearch } = useSearch()

  return (
    <div
      className={styles['header__search-icon']}
      onClick={onOpenSearch}
    >
      <Image
        src="/search-icon.svg"
        fill
        alt="search"
      />
    </div>
  )
}

export default HeaderSearchIcon
