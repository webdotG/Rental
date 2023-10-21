import { Link } from "react-router-dom"
import Login from '../components/login/login'
import style from '../scss/pages/loginPage.module.scss'

function LoginPage() {

  return (
    <>
      <h1 className={style.title}>Войти</h1>
      <Login />
      <p className={style.text}>или</p>
      <Link className={style.link_register} to='/Rental/register'>зарегистрироваться</Link>
    </>
  )
}

export default LoginPage