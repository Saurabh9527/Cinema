
import { configureStore } from '@reduxjs/toolkit'
import userCounter from '../features/user/userSlice.js'
import movieCounter from '../features/movie/movieSlice.js'
import searchCounter from "../features/search/searchSlice.js"
import languageReducer from '../features/language/languageSlice.js'

export const store = configureStore({
  reducer: {
    user : userCounter,
    movie : movieCounter,
    search : searchCounter,
    language : languageReducer,
  },
})