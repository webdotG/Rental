// import { createSlice, PayloadAction } from "@reduxjs/toolkit"

// type typeAuthPayload = {
//   access: string,
//   username: string,
//   isAuth: boolean,
// }

// type typeAuthState = {
//   access: string,
//   username: string,
//   isAuth: boolean,
// }

// const ACCESS_KEY = 'u-access'
// const USERNAME_KEY = 'u-username'

// const initialState: typeAuthState = {
//   access: localStorage.getItem(ACCESS_KEY) ?? '',
//   username: localStorage.getItem(USERNAME_KEY) ?? '',
//   isAuth: Boolean(localStorage.getItem(ACCESS_KEY)),
// }

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {

//     login(state, action: PayloadAction<typeAuthPayload>) {
//       state.access = action.payload.access
//       state.username = action.payload.username
//       state.isAuth = Boolean(action.payload.access)

//       localStorage.setItem(ACCESS_KEY, action.payload.access)
//       localStorage.setItem(USERNAME_KEY, action.payload.username)
//     },

//     logOut(state: typeAuthState) {
//       state.access = ''
//       state.username = ''
//       state.isAuth = false

//       localStorage.removeItem(ACCESS_KEY)
//       localStorage.removeItem(USERNAME_KEY)
   
//     }
//   }
// })

// export const { login, logOut } = authSlice.actions

// export default authSlice.reducer