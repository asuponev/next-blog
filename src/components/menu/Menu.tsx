import useMenu from '@/hooks/useMenu'
import menuLinks from '@/constants/menu-links'
import MenuItem from './menu-item/MenuItem'
import styles from './Menu.module.scss'
import MenuHeader from './menu-header/MenuHeader'

const Menu: React.FC = () => {
  const { isMenuOpen, onCloseMenu } = useMenu()

  return (
    <>
      <div className={`${styles.menu} ${isMenuOpen && styles.menu__open}`}>
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
      {isMenuOpen && (
        <div
          className={styles.backarea}
          onClick={onCloseMenu}
        />
      )}
    </>
  )
}

export default Menu
