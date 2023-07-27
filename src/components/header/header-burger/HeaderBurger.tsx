import useMenu from '@/hooks/useMenu'
import SvgRender from '@/components/svg-render/SvgRender'
import styles from '../Header.module.scss'

const HeaderBurger: React.FC = () => {
  const { onOpenMenu } = useMenu()

  return (
    <div
      className={styles.header__burger}
      onClick={onOpenMenu}
    >
      <SvgRender iconName='menu' />
    </div>
  )
}

export default HeaderBurger
