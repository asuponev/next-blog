import useSearch from '@/hooks/useSearch'
import SvgRender from '@/components/svg-render/SvgRender'
import styles from '../Header.module.scss'

const HeaderSearchPanel: React.FC = () => {
  const { onCloseSearch, value, onSetValue } = useSearch()

  return (
    <div className={styles['header__search-panel']}>
      <input
        type="text"
        name="search"
        placeholder="Search Something"
        value={value}
        onChange={(event) => onSetValue(event.target.value)}
        className={styles['header__search-panel__input']}
      />
      <div
        className={styles['header__search-icon']}
        onClick={onCloseSearch}
      >
        <SvgRender iconName='close' />
      </div>
    </div>
  )
}

export default HeaderSearchPanel
