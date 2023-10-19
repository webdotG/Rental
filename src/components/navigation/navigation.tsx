// import { Link } from "react-router-dom";
// import { MouseEvent } from "react";
// import { useAppDispatch, useAppSelector } from "../../redux/store";
// import logOut from '../../redux/slices/authSlice'


// function Navigateon () {
//   const dispatch = useAppDispatch
//   const {isAuth, username} = useAppSelector()

//   const onLogOut = (event: MouseEvent<HTMLAnchorElement>) =>{
//     event.preventDefault()
//     dispatch(logOut())
//   }

//   return (
//     <nav>
//       <Link to='/Rental'></Link>

//       {!isAuth && <Link to='/Rental/register'>авторизация</Link> }

//       {
//         isAuth && <>
//         <span>{username}</span>
//         <a href="#" onClick={onLogOut}>выйти</a>
//         </>
//       }

//     </nav>
//   )
// }

// export default Navigateon