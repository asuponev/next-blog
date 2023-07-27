import { useEffect, useState } from 'react'

import useMenu from './useMenu'

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(0)
  const { isMenuOpen, onCloseMenu } = useMenu()

  const onResize = (width: number) => {
    setWindowWidth(width)

    if (isMenuOpen && windowWidth > 1024) {
      onCloseMenu()
    }
  }

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    window.addEventListener('resize', () => onResize(window.innerWidth))
    return () => {
      window.removeEventListener('resize', () => onResize(window.innerWidth))
    }
  }, [onResize])

  return {
    windowWidth,
  }
}

export default useWindowWidth
