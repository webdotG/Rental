import { Link } from 'react-router-dom'
import  SingUp  from '../components/singUp/singUp'

function RegisterPage () {

  return(
    <>
    <h1>Зарегестрироваться</h1>
    <SingUp />
    <p>или</p>
    <p>если есть аккаунт то войдите</p>
    <Link to='/Rental/' />
    </>
  )
}

export default RegisterPage