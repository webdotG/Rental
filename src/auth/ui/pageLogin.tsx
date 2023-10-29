import { Link } from "react-router-dom"
import Login from './login/login'
import style from './loginPage.module.scss'

function LoginPage() {

  return (
    <div className={style.page_login_wrapper}>
      <h1 className={style.title}>Войти</h1>
      <Login />
      <p className={style.text}>или</p>
      <Link className={style.link_register} to='/Rental/register'>зарегистрироваться</Link>
    </div>
  )
}

export default LoginPage
