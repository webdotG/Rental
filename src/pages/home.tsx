import { useEffect, useCallback } from 'react'  //, useRef
import { useSelector} from "react-redux";
import { RootState, useAppDispatch } from '../redux/store';
// import { useNavigate } from 'react-router-dom'
import { setCategoryId, setCurrentPage,} from "../redux/slices/filterSlice" // setFilters 
import { fetchItems  } from '../redux/action/fetchItems' // typeSearchItemParams
import { typeItem } from '../redux/@types';
// import qs from 'qs'
import Categories from '../components/categories/categories';
// import  { sortList } from '../components/sort/sort';
import  Sort from '../components/sort/sort';
import Skeleton from '../components/skeleton';
import Pagination from '../components/pagination/pagination';
import ItemBlock from '../components/itemBlock/itemBlock';
import style from '../scss/pages//homePage.module.scss'



function Home() {
  // const navigate = useNavigate()
  const dispatch = useAppDispatch()
  // const isSearch = useRef(false)
  // const isMounted = useRef(false)
  const categoryId = useSelector((state:RootState) => state.filter.categoryId)
  const sortProperty = useSelector((state:RootState) => state.filter.sort.sortProperty)
  const currentPage = useSelector((state:RootState) => state.filter.currentPage)
  const searchValue = useSelector((state:RootState) => state.filter.searchValue)
  const items = useSelector((state:RootState) => state.items.items)
  const status = useSelector((state:RootState) => state.items.status)

  const onChangeCategory = useCallback((id: number) => {
    dispatch(setCategoryId(id))
  }, [])

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page))
  }

  const getItems = async () => {
    window.scrollTo(0, 0)
    const sortBy = sortProperty.replace('-', '');
    const order = sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : ''; // &${search}
    dispatch(fetchItems({ sortBy, order, category, currentPage, search }))
  }
  useEffect(() => {
    getItems()
  }, [categoryId, sortProperty, currentPage, searchValue])

  // useEffect(() => {
  //   if (isMounted.current) {
  //     const queryString = qs.stringify({
  //       categoryId,
  //       currentPage,
  //       sortProperty
  //     })
  //     navigate(`?${queryString}`)
  //   }
  //   isMounted.current = true
  // }, [categoryId, sortProperty, currentPage])

  // useEffect(() => {
  //   if (window.location.search) {
  //     const params = qs.parse(window.location.search.substring(1)) as unknown as typeSearchItemParams
  //     const sort = sortList.find((obj) => obj.sortProperty === params.sortBy)
      
  //     dispatch(setFilters({
  //       searchValue: params.search,
  //       categoryId: Number(params.category),
  //       currentPage: Number(params.currentPage),
  //       sort:sort ? sort : sortList[0],
        
  //     }))

  //     // dispatch(
  //     //   setFilters({
  //     //     ...params,
  //     //     sort
  //     //   })
  //     // )
  //     isSearch.current = true
  //   }
  // }, [])


  

  const skeleton = [...new Array(9)].map((_, index) => <Skeleton key={index} />)
  const itemArray = items.map((obj: typeItem) => <ItemBlock key={obj.id} {...obj} />)

  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className={style.content__title}>id категории :  {categoryId}</h2>
      <div className={style.some}>
        {/* {
          status === 'error'
            ? (<div><h1>проблема с сервером</h1><p>скоро всё починим</p></div>)
            : (console.log('allRight'))
        } */}
        {
          status === 'loading'
            ? skeleton
            : itemArray
          // .filter((obj) => {
          //   if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
          //     return true
          //   } return false
          // })
        }
      </div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </>
  )
}

export default Home