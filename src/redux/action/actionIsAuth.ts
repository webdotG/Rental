// import { AppDispatch } from "../store";
// import axios from "axios";
// import login from '../slices/authSlice'


// export type typeAuthResponse = {
//   access: string,
//   refresh: string,
// }

// export type typeAuthData = {
//   username: string,
//   password: string,
// }


// export const register = (data: typeAuthData) => {
//   return async (dispatch: AppDispatch) => {
//     try {
//       const response = await axios.post<typeAuthResponse>('auth/register', data)
//       console.log('isAuth Post allRight :')
//       dispatch(login({
//         username: data.username,
//         access: response.data.access,
//         isAuth: Boolean(response.data.access),
//       }))
//     } catch (e) {
//       console.log('isAuth Post error :', e)
//     }
//   }
// }

// export const login = (data: typeAuthData) => {
//   return async (dispatch: AppDispatch) => {
//     try {
//       const response = await axios.post<typeAuthResponse>('auth/login', data)
//       console.log('isAuth Post allRight :')
//       dispatch(login({
//         username: data.username,
//         access: response.data.access,
//         isAuth: Boolean(response.data.access),
//       }))
//     } catch (e) {
//       console.log('isAuth Post error :', e)
//     }
//   }
// }
