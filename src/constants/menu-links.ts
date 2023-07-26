import { IMenuLink } from '@/types/menu.interface';

const menuLinks: IMenuLink[] = [
  {
    title: 'Demos',
    innerItems: [
      {
        href: '/',
        title: 'Demo'
      },
      {
        href: '/',
        title: 'Demo'
      },
    ]
  },
  {
    title: 'Post',
    innerItems: [
      {
        href: '/',
        title: 'Post Header'
      },
      {
        href: '/',
        title: 'Post Layout'
      },
      {
        href: '/',
        title: 'Share Buttons'
      },
      {
        href: '/',
        title: 'Gallery Post'
      },
      {
        href: '/',
        title: 'Video Post'
      },
    ]
  },
  {
    title: 'Features',
    innerItems: [
      {
        href: '/',
        title: 'Feature'
      },
      {
        href: '/',
        title: 'Feature'
      },
    ]
  },
  {
    title: 'Categories',
    innerItems: [
      {
        href: '/',
        title: 'Category'
      },
      {
        href: '/',
        title: 'Category'
      },
    ]
  },
  {
    title: 'Shop',
    innerItems: [
      {
        href: '/',
        title: 'Test'
      },
      {
        href: '/',
        title: 'Test'
      },
    ]
  },
  {
    title: 'Buy Now',
    href: '/',
  },
]

export default menuLinks;
