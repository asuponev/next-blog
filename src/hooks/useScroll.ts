import { useEffect, useState } from 'react'

const useScroll = () => {
  const [isSticky, setIsSticky] = useState(true)
  const [lastScroll, setLastScroll] = useState(0)

  const onScroll = () => {
    const currentScroll = window.scrollY
    if (!isSticky && currentScroll >= lastScroll) {
      setLastScroll(currentScroll)
    } else if (currentScroll - lastScroll >= 200) {
      setLastScroll(currentScroll)
      setIsSticky(false)
    } else if (currentScroll < lastScroll) {
      setLastScroll(currentScroll)
      setIsSticky(true)
    } else {
      setIsSticky(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [onScroll])

  return {
    isSticky,
  }
}

export default useScroll
