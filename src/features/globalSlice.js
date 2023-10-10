import { createSlice } from '@reduxjs/toolkit'
import { getItemFromLocalstorage } from '../helpers/localStorage'
const langFromLocalStorage = getItemFromLocalstorage('lang')
const initialState = {
  lang: langFromLocalStorage || 'en',
}
const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    toggleLanguage: (state) => {
      state.lang === 'en' ? (state.lang = 'it') : (state.lang = 'en')
    },
  },
})
export const { toggleLanguage } = globalSlice.actions
export default globalSlice.reducer
