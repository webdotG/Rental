import { Link } from 'react-router-dom'
import SingUp from './singUp/singUp';
import style from './registerPage.module.scss'

function RegisterPage() {
  return (
    <div className={style.register_page_wrapper}>
      <h1 className={style.title}>Регистрация</h1>
      <SingUp />
      <p className={style.text}>или</p>
      <Link className={style.link_login} to='/Rental/login'>войти</Link>
    </div>
  )
}

export default RegisterPage
