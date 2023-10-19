import { Link } from "react-router-dom"
import  Login  from '../components/login/login'

function LoginPage() {

  return (
    <>
      <h1>Войти</h1>
      <Login />
      <p>или</p>
      <p>
        <Link to='/Rental/register'>зарегестртроваться</Link>
      </p>
    </>
  )
}

export default LoginPage