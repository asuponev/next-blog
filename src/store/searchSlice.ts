import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type searchState = {
  isSearchOpen: boolean
  value: string
}

const initialState: searchState = {
  isSearchOpen: false,
  value: '',
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    openSearch(state) {
      state.isSearchOpen = true
    },
    closeSearch(state) {
      state.isSearchOpen = false
    },
    setValue(state, action: PayloadAction<string>) {
      state.value = action.payload
    }
  },
})

export const { openSearch, closeSearch, setValue } = searchSlice.actions
export default searchSlice.reducer
