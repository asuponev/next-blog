import HeaderLogo from './header-logo/HeaderLogo'
import HeaderBurger from './header-burger/HeaderBurger'
import HeaderSearch from './header-search/HeaderSearch'
import styles from './Header.module.scss'

const Header: React.FC = () => {

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <HeaderBurger />
        <HeaderLogo />
        <HeaderSearch />
      </div>
    </header>
  )
}

export default Header
