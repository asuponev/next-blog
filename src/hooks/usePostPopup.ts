import { closePostPopup, openPostPopup } from '@/store/postSlice'
import { useAppDispatch, useAppSelector } from './useStore'
import { IPost } from '@/types/posts.interface'

const usePostPopup = () => {
  const dispatch = useAppDispatch()
  const { isPopupOpen, post } = useAppSelector((state) => state.post)

  const onOpenPopup = (post: IPost): void => {
    dispatch(openPostPopup(post))
  }

  const onClosePopup = (): void => {
    dispatch(closePostPopup())
  }

  return {
    isPopupOpen,
    post,
    onOpenPopup,
    onClosePopup,
  }
}

export default usePostPopup
