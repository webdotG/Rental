import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import axios from 'axios'
import style from './itemPage.module.scss'
// `https://651f2c9444a3a8aa47697fdb.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}`//&${search}


function ItemPage() {
  const { id } = useParams()
  // console.log(params.id)

  const [item, setItem] = useState<{
    imageUrl: string,
    title: string,
    price: number,
  }>()

  useEffect(() => {
    async function fetchItemId() {
      try {
        const { data } = await axios.get('https://651f2c9444a3a8aa47697fdb.mockapi.io/items/' + id)
        setItem(data)
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
      <div className={style.about_price_block}>
        <p>about price block info ???</p>
      </div>
      <div className={style.item_text_wrapper}>
        <h4>item title</h4>
        <p>some text about item</p>
      </div>
    </div>
  )
}

export default ItemPage
