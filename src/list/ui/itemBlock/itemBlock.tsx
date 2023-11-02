import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from 'react-router-dom'
import { addItem, deleteItem } from '../../../cart/state';
import { typeCartItem } from "../../../cart/types";
import { RootState } from "../../../shared-kernel/store";
import style from './itemBlock.module.scss'

const NAMETYPES: ['самовывоз', 'доставка'] = ['самовывоз', 'доставка']
const SIZEVALUES = [1, 6, 12, 18, 24]

type typeItemBlockProps = {
  id: number,
  title?: string,
  price: number,
  imageUrl: string,
  sizes?: number[],
  modelName: string,
  fields: { name: string, value: string }[],
}

function ItemBlock({ id, modelName, price, imageUrl }: typeItemBlockProps) {
  const [deliveryType, setDeliveryType] = useState<'самовывоз' | 'доставка'>('доставка');

  const [activeType] = useState(0)
  const [activeSize] = useState(0)

  const dispatch = useDispatch()
  const cartItem = useSelector((state: RootState) => state.cart.items.find((obj) => obj.id === id))
  const addedCount = cartItem ? cartItem.count : 0

  const onClickAdd = () => {
    const item: typeCartItem = {
      id,
      title: modelName,
      price,
      deliveryType,
      type: NAMETYPES[activeType],
      size: SIZEVALUES[activeSize],
      count: 0,
      imageUrl,
    }
    dispatch(addItem(item))
  }

  const onClickDelete = () => {
    const item: typeCartItem = {
      id,
      title: modelName,
      price,
      deliveryType,
      type: NAMETYPES[activeType],
      size: SIZEVALUES[activeSize],
      count: 0,
      imageUrl,
    }
    dispatch(deleteItem(item))
  }



  return (
    <div className={style.item_block}>
      <img className={style.item_block__image} src={imageUrl} alt="ФОТО ТЕХНИКИ" />
      <h4 className={style.item_block__title}>{modelName}</h4>
      <div className={style.item_block__price}>Цена от : {price} р</div>
      <div className={style.item_block__selector}>
        <ul className={style.item_block__list_type}>
          {NAMETYPES.map((name) => {
            return (
              <li
                key={name}
                onClick={() => setDeliveryType(name)}
                className={deliveryType === name ? style.active : ''}>
                {name}</li>
            )
          })}
        </ul>
        <button className={style.delivery_link}>зона доставки</button>
        <ul className={style.item_block__list_size}>
          {/*sizes.map((size, index) => (
            <li
              key={size}
              onClick={() => setActiveSize(index)}
              className={activeSize === index ? style.active : ''}>
              {size}/</li>
          ))*/}
        </ul>
      </div>
      <div className={style.item_block__bottom}>
        <button
          className={style.item_block__button}
          onClick={onClickAdd} >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="black"
            />
          </svg>
          <span className={style.item_block__button_text}>Добавить</span>
          {addedCount > 0 && <i className={style.item_block__button_count} >{addedCount}</i>}
        </button>
        <button
          onClick={onClickDelete}
          className={style.item_block__button}>
          <svg height='18px' viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
            <path fill="black" d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z" />
          </svg>
          <span className={style.item_block__button_text}>Убрать</span>
          {addedCount > 0 && <i className={style.item_block__button_count}>{addedCount}</i>}
        </button>
      </div>
      <Link
        className={style.linkTo}
        key={id}
        to={`item/${id}`}
      >Показть всю информацию</Link>
    </div>
  )
}

export default ItemBlock
