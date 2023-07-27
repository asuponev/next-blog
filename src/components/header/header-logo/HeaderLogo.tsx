import SvgRender from '@/components/svg-render/SvgRender'
import styles from '../Header.module.scss'

const HeaderLogo: React.FC = () => {
  return (
    <div className={styles.header__logo}>
      <SvgRender iconName='logo' />
    </div>
  )
}

export default HeaderLogo
