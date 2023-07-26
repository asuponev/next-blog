import { closeSearch, openSearch, setValue } from '@/store/searchSlice'
import { useAppDispatch, useAppSelector } from './useStore'

const useSearch = () => {
  const dispatch = useAppDispatch()
  const { isSearchOpen, value } = useAppSelector((state) => state.search)

  const onOpenSearch = (): void => {
    dispatch(openSearch())
  }

  const onCloseSearch = (): void => {
    dispatch(closeSearch())
  }

  const onSetValue = (value: string): void => {
    dispatch(setValue(value))
  }

  return {
    isSearchOpen,
    value,
    onOpenSearch,
    onCloseSearch,
    onSetValue
  }
}

export default useSearch
