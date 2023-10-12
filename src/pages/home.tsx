import { useEffect, useRef, useCallback } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from 'react-router-dom'
import { setCategoryId, setCurrentPage, setFilters } from "../redux/slices/filterSlice"
import { fetchItems } from '../redux/slices/itemsSlice'
import qs from 'qs'
import Categories from '../components/categories/categories';
import Sort, { sortList } from '../components/sort/sort';
import Skeleton from '../components/skeleton';
import Pagination from '../components/pagination/pagination';
import ItemBlock from '../components/itemBlock/itemBlock';


function Home() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isSearch = useRef(false)
  const isMounted = useRef(false)
  const categoryId = useSelector((state) => state.filter.categoryId)
  const sortProperty = useSelector((state) => state.filter.sort.sortProperty)
  const currentPage = useSelector((state) => state.filter.currentPage)
  const searchValue = useSelector((state) => state.filter.searchValue)
  const items = useSelector((state) => state.items.items)
  const status = useSelector((state) => state.items.status)

  const onChangeCategory = useCallback((id) => {
    dispatch(setCategoryId(id))
  }, [])

  const onChangePage = (page) => {
    dispatch(setCurrentPage(page))
  }

  // Если изменил параметры и был первый рендер
  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        categoryId,
        currentPage,
        sortProperty
      })
      navigate(`?${queryString}`)
    }
    isMounted.current = true
  }, [categoryId, sortProperty, currentPage])

  // Если был первый рендер, то проверяю URl-параметры и сохраняю в редакс
  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1))
      const sort = sortList.find((obj) => obj.sortProperty === params.sortProperty)
      dispatch(
        setFilters({
          ...params,
          sort
        })
      )
      isSearch.current = true
    }
  }, [])

  const getItems = async () => {
    window.scrollTo(0, 0)
    const sortBy = sortProperty.replace('-', '');
    const order = sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    // const search = searchValue ? `&search=${searchValue}` : '';  &${search}
    dispatch(fetchItems({ sortBy, order, category, currentPage }))
  }

  useEffect(() => {
    getItems()
  }, [categoryId, sortProperty, currentPage, searchValue])

  const skeleton = [...new Array(9)].map((_, index) => <Skeleton key={index} />)

  const itemArray = items.map((obj) =>
    <Link key={obj.id} to={`item/${obj.id}`}>
      <ItemBlock {...obj} />
    </Link>
  )

  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">{categoryId}</h2>
      <div className="content__items">
        {
          status === 'error'
            ? (<div><h1>проблема с сервером</h1><p>скоро всё починим</p></div>)
            : (console.log('allRight'))
        }
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