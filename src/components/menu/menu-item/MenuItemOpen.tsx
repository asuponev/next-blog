import Image from 'next/image'
import Link from 'next/link'

import { IMenuOpenProps } from '@/types/menu.interface'
import styles from '../Menu.module.scss'

const MenuItemOpen: React.FC<IMenuOpenProps> = ({ items }) => {
  return (
    <div className={styles.menu__item__open}>
      {items.map((item) => (
        <Link
          href={item.href}
          className={styles.menu__item__open__link}
        >
          <p className={styles.menu__item__open__title}>{item.title}</p>
          <div className={styles.menu__item__open__arrow}>
            <Image
              src="/menu-arrow-icon.svg"
              fill
              alt="open"
            />
          </div>
        </Link>
      ))}
    </div>
  )
}

export default MenuItemOpen
