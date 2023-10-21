import { useAppDispatch } from '../../redux/store'
import { useNavigate } from 'react-router-dom'
import Form from '../form/form'
import { addUser } from '../../redux/slices/authSlice'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



function SingUp() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onRegister = (email: string, password: string) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log('TEST CREATE USER FIREBASE DEBUG', user)
        dispatch(addUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
        }))
      }) 
      .catch((error) => {
        console.log(error)
      });
      navigate('/Rental')
  }


  return (
    <>
      <Form
        title='зарегестрироваться'
        handleClick={onRegister}
      />
    </>
  )
}

export default SingUp