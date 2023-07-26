import { createSlice } from '@reduxjs/toolkit'

type menuState = {
  isMenuOpen: boolean
}

const initialState: menuState = {
  isMenuOpen: false,
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    openMenu(state) {
      state.isMenuOpen = true
    },
    closeMenu(state) {
      state.isMenuOpen = false
    },
  },
})

export const { openMenu, closeMenu } = menuSlice.actions
export default menuSlice.reducer
