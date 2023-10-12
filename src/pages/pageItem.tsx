import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import axios from 'axios'
// `https://651f2c9444a3a8aa47697fdb.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}`//&${search}


function ItemPage() {
  const { id } = useParams()
  // console.log(params.id)

  const [item, setItem] = useState()

  useEffect(() => {
    async function fetchItemId() {
      try {
        const { data } = await axios.get('https://651f2c9444a3a8aa47697fdb.mockapi.io/items/'+id)
        setItem(data)
      } catch (error) {
        alert('не смог получить выбранный товар')
      }
    }
    fetchItemId()
  }, [id])

  if (!item) {
    return 'ЗАГРУЗКА...'
  }return (
    <>
      <h1>ITEMPAGE ID : {id}</h1>
      <img src={item.imageUrl} />
      <h2>{item.title}</h2>
      <h3>Цена :{item.price}</h3>
    </>
  )
}

export default ItemPage