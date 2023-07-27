import Image from 'next/image'

interface IProps {
  iconName: 'logo' | 'menu' | 'arrow' | 'search' | 'close'
}

const icons: Record<string, string> = {
  logo: '/logo.svg',
  menu: '/menu-icon.svg',
  arrow: '/menu-arrow-icon.svg',
  search: '/search-icon.svg',
  close: '/close-icon.svg',
}

const SvgRender: React.FC<IProps> = ({ iconName }) => {
  return (
    <Image
      src={icons[iconName]}
      fill
      alt={`icon-${iconName}`}
    />
  )
}

export default SvgRender
