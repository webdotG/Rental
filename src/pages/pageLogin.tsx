import { Link } from "react-router-dom"
import  Login  from '../components/login/login'
import style from '../scss/pages/loginPage.module.scss'

function LoginPage() {

  return (
    <>
      <h1 className={style.title}>Войти</h1>
      <Login />
      <p>или</p>
      <p>
        <Link to='/Rental/register'>зарегестртроваться</Link>
      </p>
    </>
  )
}

export default LoginPage