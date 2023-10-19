import { Link } from 'react-router-dom'
import  SingUp  from '../components/singUp/singUp'
import style from '../scss/pages/registerPage.module.scss'

function RegisterPage () {

  return(
    <>
    <h1 className={style.title}>Зарегестрироваться</h1>
    <SingUp />
    <p className={style.text}>или</p>
    <Link className={style.link_login} to='/Rental/login'>войти</Link>
    </>
  )
}

export default RegisterPage