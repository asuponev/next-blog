import { IPost } from '@/types/posts.interface'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type searchState = {
  isPopupOpen: boolean
  post: IPost | null
}

const initialState: searchState = {
  isPopupOpen: false,
  post: null,
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    openPostPopup(state, action: PayloadAction<IPost>) {
      state.isPopupOpen = true
      state.post = action.payload
    },
    closePostPopup(state) {
      state.isPopupOpen = false
      state.post = null
    },
  },
})

export const { openPostPopup, closePostPopup } = postSlice.actions
export default postSlice.reducer
