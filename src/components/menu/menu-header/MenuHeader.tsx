import useMenu from '@/hooks/useMenu'
import HeaderLogo from '@/components/header/header-logo/HeaderLogo'
import SvgRender from '@/components/svg-render/SvgRender'
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
        <SvgRender iconName='close' />
      </div>
    </div>
  )
}

export default MenuHeader
