import { useAppDispatch } from '../../redux/store'
// import { addUser } from '../../redux/slices/authSlice'
import Form from '../form/form'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// type typeLoginProps = {
//   email: string,
//   password: number,
// }

function Login () {
 
  const dispatch = useAppDispatch()

  const onLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
      })
      .catch((error) => {
        console.log(error)
      });
  }

  return (
    <>
      <Form
        title='войти'
        handleClick={onLogin}
      />
    </>
  )
}

export default Login