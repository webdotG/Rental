import CartItem from "../components/cart_item/cartItem";
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/store";
import { clearItems } from '../redux/slices/cartSlice'
import CartEmpty from "../components/cart_empty/cartEmpty";
import style from '../scss/pages/cartPage.module.scss';
import { Link } from "react-router-dom";

function Cart() {

  const dispatch = useDispatch()
  const { totalPrice, items } = useSelector((state: RootState) => state.cart)
  const totalCount = items.reduce((sum, item) => sum + item.count, 0)

  const onClickClear = () => {
    if (window.confirm('удалить всё ?')) {
      dispatch(clearItems())
    }
  }

  if (!totalPrice) {
    return <CartEmpty />
  }
  return (
        <div className={style.cart}>
          <div className={style.cart__top}>
            <h2 className={style.cart_content__title}>
              Корзина
            </h2>
            <button onClick={onClickClear} className={style.cart__clear}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 5H4.16667H17.5"
                    stroke="white"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z"
                    stroke="white"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.33337 9.16667V14.1667"
                    stroke="white"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.6666 9.16667V14.1667"
                    stroke="white"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Очистить корзину</span>
              </button>
          </div>
          <ul className={style.content__items}>
            {
              items.map((item) =>
                <CartItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  count={item.count}
                  image={item.imageUrl}
                  type={item.type}
                  sizes={item.size}
                />)
            }
          </ul>
          <div className={style.cart__bottom}>
            <div className={style.cart__bottom_details}>
              <p>Всего : {totalCount} шт.</p>
              <p>Сумма : {totalPrice} ₽</p>
            </div>
            <div className={style.cart__bottom_buttons}>
              <Link className={style.cart__bottom_link_main}
                to="/Rental"
              >
                {/* <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 13L1 6.93015L6.86175 1"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg> */}
                На главную
              </Link>
              <button className={style.pay_btn}>
                <span>Оплатить</span>
              </button>

            </div>
          </div>
        </div>
  );
}

export default Cart;
