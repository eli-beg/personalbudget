import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const userData = JSON.parse(localStorage.getItem('user'))

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userData,
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload
      localStorage.setItem('user', JSON.stringify(state.userData))
      axios.defaults.headers.common["Authorization"] = `Bearer ${state.userData.token}`;
    },
    destroyUserData: (state) => {
      state.userData = null
      localStorage.removeItem('user')
    },
  },
})

export const { setUserData, destroyUserData } = authSlice.actions

export default authSlice.reducer