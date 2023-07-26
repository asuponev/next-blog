export interface IMenuInnerItem {
  href: string
  title: string
}

export interface IMenuLink {
  title: string
  href?: string
  innerItems?: IMenuInnerItem[]
}
