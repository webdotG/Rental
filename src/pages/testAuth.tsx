// import { FormEvent, } from "react"
// import useInput from '../Hook/input'
// import { useAppDispatch } from "../redux/store"
// import {register} from '../redux/action/actionIsAuth'
// import { useNavigate } from "react-router-dom"
// import Navigateon from "../components/navigation/navigation"
// import { login } from "../redux/slices/authSlice"

// function AuthPage() {
//   const dispatch = useAppDispatch()
//   const navigate = useNavigate()
//   const username = useInput()
//   const password = useInput()

//   const isFormValid = () => username.value && password.value

//   const submitHandler = (event: FormEvent) => {
//     event.preventDefault
//     if (isFormValid()) {
//       dispatch(
//         register({username: username.value, password: password.value})
//       ).then(() => navigate('/Rental'))
//     } else {
//       alert('форма не валидна')
//     }
//   }

//   const onLogin = () => {
//     if (isFormValid()) {
//       dispatch(login({
//         username: username.value,
//         password: password.value
//       })).then(() => navigate('/Rental'))
//     } else {
//       alert('форма не валидна')
//     }
//   }

//   return (<>
//     <Navigateon />
//     <form
//       onSubmit={submitHandler}
//     >
//       <div>
//         <label htmlFor="username">логин</label>
//         <input
//           {...username}
//           id="username"
//           type="text"
//         />
//       </div>
//       <div>
//         <label htmlFor="password">пароль</label>
//         <input
//           {...password}
//           id="password"
//           type="password"
//         />
//       </div>
//       <button type="submit" >регистрироваться</button>
//       <button onClick={onLogin} >войти</button>
//     </form>
//     </>
//   )
// }

// export default AuthPage