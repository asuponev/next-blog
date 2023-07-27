import useSearch from '@/hooks/useSearch'
import SvgRender from '@/components/svg-render/SvgRender'
import styles from '../Header.module.scss'

const HeaderSearchIcon: React.FC = () => {
  const { onOpenSearch } = useSearch()

  return (
    <div
      className={styles['header__search-icon']}
      onClick={onOpenSearch}
    >
      <SvgRender iconName='search' />
    </div>
  )
}

export default HeaderSearchIcon
