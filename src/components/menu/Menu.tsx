import useMenu from '@/hooks/useMenu'
import useScroll from '@/hooks/useScroll'
import useWindowWidth from '@/hooks/useWindowWidth'
import menuLinks from '@/constants/menu-links'
import BackArea from '@/components/back-area/BackArea'
import MenuItem from './menu-item/MenuItem'
import MenuHeader from './menu-header/MenuHeader'
import styles from './Menu.module.scss'

const Menu: React.FC = () => {
  const { isMenuOpen, onCloseMenu } = useMenu()
  const { isSticky } = useScroll()
  const { windowWidth } = useWindowWidth()

  const menuOpen = isMenuOpen && windowWidth <= 1024 ? styles['menu--open'] : ''
  const menuStick = isSticky && windowWidth > 1024 ? styles['menu--sticky'] : ''

  return (
    <>
      <div className={`${styles.menu} ${menuOpen} ${menuStick}`}>
        <MenuHeader />
        <nav>
          <ul className={styles.menu__list}>
            {menuLinks.map((link) => (
              <MenuItem
                key={link.title}
                {...link}
              />
            ))}
          </ul>
        </nav>
      </div>
      <BackArea
        isOpen={isMenuOpen}
        onClose={onCloseMenu}
      />
    </>
  )
}

export default Menu
