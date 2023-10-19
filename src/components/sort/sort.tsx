import { useState, useRef, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { setSort, typeSortPropertyEnum } from '../../redux/slices/filterSlice'
import { RootState } from "../../redux/store"
import style from './sort.module.scss'

type typeSortList = {
  name: string,
  sortProperty: typeSortPropertyEnum,
}

export const sortList: typeSortList[] = [
  { name: 'популярности возрастанию', sortProperty: typeSortPropertyEnum.RATING_DESC },
  { name: 'популярности убыванию', sortProperty: typeSortPropertyEnum.RATING_ASC },
  { name: 'цене возрастанию', sortProperty: typeSortPropertyEnum.PRICE_DESC },
  { name: 'цене убыванию', sortProperty: typeSortPropertyEnum.PRICE_ASC },
  { name: 'алфавиту возрастанию', sortProperty: typeSortPropertyEnum.TITLE_DESC },
  { name: 'алфавиту убыванию', sortProperty: typeSortPropertyEnum.TITLE_ASC }
]

function Sort() {
  const sortRef = useRef<HTMLDivElement>()
  const dispatch = useDispatch()
  const sort = useSelector((state: RootState) => state.filter.sort)
 
  const [open, setOpen] = useState(false)

  const onClickListItem = (obj:typeSortList) => {
    dispatch(setSort(obj))
    setOpen(false)
  }

  //   document.body.addEventListener('click', handleClickOutside)
  //   return () => {
  //     console.log('componen did unmount')
  //     document.removeEventListener('click', handleClickOutside)
  //   }
  // }, [])
  // useEffect(() => {
  //   document.body.addEventListener('click', { once: true }, (event) => {
  //     if (!event.composedPath().includes(sortRef.current)) {
  //       setOpen(false);
  //     }
  //   });
  // }, []);



  type typePopUpClick = MouseEvent & {
    path: Node[]
  }
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      
      // path  = event.path || (event.composedPath && event.composedPath());
      const _event = event as typePopUpClick
      if (sortRef.current && !_event.path.includes(sortRef.current)) {  //========= composedPath посмотреть как пофтксить
        setOpen(false)
      }
    }
    document.body.addEventListener('click', handleClickOutside)
    return () => document.body.removeEventListener('click', handleClickOutside)
  }, [])
    

  return (

    <div  className={style.sort}>
      <div className={style.sort__label}>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <p onClick={() => setOpen(!open)}>{sort.name}</p>
      </div>
      {open ? (
        <div className={style.sort__popup}>
          <ul className={style.sort__list}>
            {sortList.map((obj, index) => (
              <li
                key={index}
                onClick={() => onClickListItem(obj)}
                className={sort.sortProperty === obj.sortProperty ? 'active' : ''}
              >
                {obj.name}</li>
            ))}
          </ul>
        </div>) : ('')
      }
    </div>
  )
}

export default Sort