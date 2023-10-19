import { useAppDispatch } from '../../redux/store'
import Form from '../form/form'
import { addUser } from '../../redux/slices/authSlice'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



function SingUp() {
  const dispatch = useAppDispatch()

  // const onRegister = (email, password) => {
  //   const auth = getAuth();
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then(({ user }) => {
  //       dispatch(addUser(
  //         email: user.email,
  //         id: user.id,
  //         token: user.accessToken,
  //       ))
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     });
  // }


  return (
    <>
      <Form
        title='зарегестрироваться'
        // handleClick={onRegister}
      />
    </>
  )
}

export default SingUp