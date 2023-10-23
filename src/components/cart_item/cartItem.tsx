import { useDispatch } from "react-redux"
import { addItem, minusItem, removeItem } from '../../redux/slices/cartSlice'
import { typeCartItem } from "../../redux/@types"
import style from './cart_item.module.scss'

type typeCartItemProps = {
  id: string,
  title: string,
  price: number,
  count: number,
  image: string,
  type: string,
  sizes: number,
}

function CartItem({ id, title, price, count, image, type, sizes }: typeCartItemProps) {
  const dispatch = useDispatch()

  const onClickPlus = () => {
    dispatch(addItem({ id } as typeCartItem))
  }
  const onClickMinus = () => {
    dispatch(minusItem(id))
  }
  const onClickRemove = () => {
    if (window.confirm('точно хотите удалить ?')) {
      dispatch(removeItem(id))
    }
  }

  return (
    <li className={style.cart__item} >
      <div className={style.cart__item_img}>
        <img className={style.item_block__image} src={image} alt="ФОТО ТЕХНИКИ" />
      </div>
      <div className={style.cart__item_info}>
        <h3>{title}</h3>
        <p>{type}</p>
        <p>{sizes}</p>
      </div>
      <div className={style.cat_item_price_block}>
        <div className={style.cart__item_count}>
          <button disabled={count === 1} onClick={onClickMinus}
            className={style.cart__item_count_minus}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 10 10"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* <path
                d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
              /> */}
              <path
                d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
              />
            </svg>
          </button>
          <p>{count}</p>
          <button onClick={onClickPlus} className={style.cart__item_count_plus}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 10 10"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
              />
              <path
                d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
              />
            </svg>
          </button>
        </div>
        <div className={style.cart__item_price}>
          <p>{price * count} ₽</p>
        </div>
        <button onClick={onClickRemove} className={style.cart__item_remove}>
          удалить
        </button>
      </div>
    </li>
  )
}

export default CartItem