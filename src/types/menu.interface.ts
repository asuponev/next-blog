interface IMenuInnerItem {
  href: string
  title: string
}

export interface IMenuLink {
  title: string
  href?: string
  innerItems?: IMenuInnerItem[]
}

export interface IMenuItemProps {
  link: IMenuLink
}

export interface IMenuOpenProps {
  items: IMenuInnerItem[]
}
