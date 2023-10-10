import { configureStore } from '@reduxjs/toolkit'
import globalSlice from '../features/globalSlice'
export const store = configureStore({
  reducer: {
    global: globalSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
