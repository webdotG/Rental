import { useAppDispatch } from '../../../shared-kernel/store';
import { useNavigate } from 'react-router-dom'
import Form from '../form/form'
import { addUser } from '../../state'
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
          email: user.email as string,
          id: user.uid,
          token: user.refreshToken,
        }))
      }) 
      .catch((error) => {
        console.log(error)
      });
      console.log('NAVIGATE : /Rentsl')
      navigate('/Rental')
  }


  return (
    <>
      <Form
        title='зарегистрироваться'
        handleClick={onRegister}
      />
    </>
  )
}

export default SingUp
