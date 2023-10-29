import {Link} from 'react-router-dom'
import style from './cartEmpty.module.scss'

function CartEmpty() {

  return (
    <div className={style.root}>
      <h1>Корзина пуста</h1>
      <h2>вы не выбрали ни одного товра</h2>
    <br />
    <br />
    <br />
    <Link to='/Rental'><h3>вернуться на главную</h3></Link>
    </div>
  )
}

export default CartEmpty