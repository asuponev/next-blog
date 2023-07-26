import useSearch from '@/hooks/useSearch'
import HeaderLogo from './header-logo/HeaderLogo'
import HeaderBurger from './header-burger/HeaderBurger'
import HeaderSearchIcon from './header-search-icon/HeaderSearchIcon'
import HeaderSearchPanel from './header-search-panel/HeaderSearchPanel'
import styles from './Header.module.scss'

const Header: React.FC = () => {
  const { isSearchOpen } = useSearch()

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__top}>
          <HeaderBurger />
          <HeaderLogo />
          {!isSearchOpen && <HeaderSearchIcon />}
        </div>
        {isSearchOpen && <HeaderSearchPanel />}
      </div>
    </header>
  )
}

export default Header
