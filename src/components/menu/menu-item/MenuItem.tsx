import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { IMenuItemProps } from '@/types/menu.interface'
import styles from '../Menu.module.scss'
import MenuItemOpen from './MenuItemOpen'

const MenuItem: React.FC<IMenuItemProps> = ({ link }) => {
  const { title, innerItems, href } = link
  const [isOpenItems, setIsOpenItems] = useState(false)

  const onOpenItems = (): void => {
    if (innerItems) {
      setIsOpenItems(() => !isOpenItems)
    }
  }

  return (
    <li className={styles.menu__item}>
      <div
        className={styles.menu__item__top}
        onClick={onOpenItems}
      >
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
          <div
            className={`
            ${styles.menu__item__arrow} 
            ${isOpenItems && styles.menu__item__arrow__open}
          `}
          >
            <Image
              src="/menu-arrow-icon.svg"
              fill
              alt="open"
            />
          </div>
        )}
      </div>
      {isOpenItems && innerItems && <MenuItemOpen items={innerItems} />}
    </li>
  )
}

export default MenuItem
