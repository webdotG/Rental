import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useEffect, useState } from 'react'
import { mockData } from "../../domain"
import { addItem } from '../../../cart/state';
import { typeCartItem } from "../../../cart/types";
import style from './itemPage.module.scss'
import { typeItem } from "../../types"

const NAMETYPES: ['самовывоз', 'доставка'] = ['самовывоз', 'доставка']
const SIZEVALUES = [1, 6, 12, 18, 24]

function ItemPage() {
  const dispatch = useDispatch()
  const { id } = useParams()
  // console.log(params.id)
  const [deliveryType, setDeliveryType] = useState<'самовывоз' | 'доставка'>('самовывоз');
  const [activeType] = useState(0)
  const [activeSize] = useState(0)
  const [item, setItem] = useState<typeItem>()

  const onClickAdd = () => {
    if (item) {
      const cardItem: typeCartItem = {
        id: item.id,
        title: item.modelName,
        price: item.price,
        deliveryType,
        type: NAMETYPES[activeType],
        size: SIZEVALUES[activeSize],
        count: 0,
        imageUrl: item.imageUrl,
      }
      dispatch(addItem(cardItem))
    }
  }

  useEffect(() => {
    async function fetchItemId() {
      try {
        setItem(mockData.machines.find(item => {
          if (id) {
            return item.id === +id;
          }
        }));

        // const { data } = await axios.get('https://651f2c9444a3a8aa47697fdb.mockapi.io/items/' + id)
      } catch (error) {
        alert('не смог получить выбранный товар')
      }
    }
    fetchItemId()
  }, [id])

  if (!item) {
    return 'ЗАГРУЗКА...'
  } return (
    <div className={style.item_page_wrapper}>
      <h1 className={style.id_title} >ITEMPAGE ID : {id}</h1>
      <img className={style.item_img} src={item.imageUrl} />
      <h2 className={style.item_title} >{item.title}</h2>
      <h3 className={style.item_price} >Цена от :{item.price}</h3>
      <ul className={style.item_agent_ifo}>
        <li className={style.item_agetn_info_img}>logo firm</li>
        <li className={style.item_agetn_info_name}>name firm</li>
        <li className={style.item_agetn_info_rating}>rating firm</li>
      </ul>
      <div className={style.item_block}>
        <ul className={style.item_block__list_type}>
          {NAMETYPES.map((name) =>  {
            return (
              <li
                key={name}
                onClick={() => setDeliveryType(name)}
                className={deliveryType === name ? style.active : ''}>
                {name}</li>
            )
          })}
        </ul>
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
        </button>
      </div>
      <div className={style.about_price_block}>
        <p>about price block info ????</p>
      </div>
      <div className={style.item_text_wrapper}>
        <h4>item title</h4>
        <p>some text about item</p>
      </div>
    </div>
  )
}

export default ItemPage
