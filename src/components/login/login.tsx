import { useAppDispatch } from '../../redux/store'
import { addUser } from '../../redux/slices/authSlice'
import Form from '../form/form'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom'


function Login () {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const onLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        dispatch(addUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
        }))
        navigate('/Rental')
      })
      .catch((error) => {
        window.alert('нет такого человека', error)
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