import {Link} from 'react-router-dom'
import style from './cartEmpty.module.scss'
import Footer from '../../../shared-kernel/ui/footer/footer'
// import Footer from '../../../shared-kernel/ui/footer/footer'

function CartEmpty() {

  return (
    <>
    <div className={style.root}>
      <h1>Корзина пуста</h1>
      <h2>вы не выбрали ни одного товра</h2>
    <br />
    <br />
    <br />
    <Link to='/Rental'><h3>вернуться на главную</h3></Link>
    {/* <Footer /> */}
    </div>
    <Footer />
    </>
  )
}

export default CartEmpty