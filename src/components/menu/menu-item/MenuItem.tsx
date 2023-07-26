import Image from 'next/image'
import Link from 'next/link'

import { IMenuLink } from '@/types/menu.interface'
import MenuItemOpen from './MenuItemOpen'
import styles from '../Menu.module.scss'

const MenuItem: React.FC<IMenuLink> = ({ title, innerItems, href }) => {
  return (
    <li className={styles.menu__item}>
      <div className={styles.menu__item__top}>
        {href ? (
          <Link
            href={href}
            className={styles.menu__item__title}
          >
            {title}
          </Link>
        ) : (
          <p className={styles.menu__item__title}>{title}</p>
        )}
        {innerItems && (
          <div className={styles.menu__item__arrow}>
            <Image
              src="/menu-arrow-icon.svg"
              fill
              alt="open"
            />
          </div>
        )}
      </div>
      {innerItems && <MenuItemOpen items={innerItems} />}
    </li>
  )
}

export default MenuItem
