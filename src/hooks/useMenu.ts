import { closeMenu, openMenu } from '@/store/menuSlice'
import { useAppDispatch, useAppSelector } from './useStore'

const useMenu = () => {
  const dispatch = useAppDispatch()
  const { isMenuOpen } = useAppSelector((state) => state.menu)

  const onOpenMenu = (): void => {
    dispatch(openMenu())
  }

  const onCloseMenu = (): void => {
    dispatch(closeMenu())
  }

  return {
    isMenuOpen,
    onOpenMenu,
    onCloseMenu,
  }
}

export default useMenu
