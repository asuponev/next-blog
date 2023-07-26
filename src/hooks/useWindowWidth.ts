import { useEffect, useState } from 'react'

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(0)

  const onResize = (width: number) => {
    setWindowWidth(width)
  }

  useEffect(() => {
    window.addEventListener('scroll', () => onResize(window.innerWidth))
    return () => {
      window.removeEventListener('scroll', () => onResize(window.innerWidth))
    }
  }, [onResize])

  return {
    windowWidth,
  }
}

export default useWindowWidth
