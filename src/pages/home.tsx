import axios from 'axios';
import { useState, useEffect, useContext, useRef, useCallback } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId, setCurrentPage, setFilters } from "../redux/slices/filterSlice"
import { fetchItems } from '../redux/slices/itemsSlice'
import { SearchContext } from '../App'
import { useNavigate } from 'react-router-dom';
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
  const items = useSelector((state) => state.items.items)
  const { searchValue } = useContext(SearchContext)
  const [isLoading, setIsLoading] = useState(true)

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
    setIsLoading(true)
    const sortBy = sortProperty.replace('-', '');
    const order = sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    // const search = searchValue ? `&search=${searchValue}` : '';  &${search}
    try {
      dispatch(fetchItems({sortBy,order, category, currentPage}))    
      console.log('fetschItems :', fetchItems)
    } catch (error) {
      alert('что-то сломалосб на сервере')
    } finally {
      setIsLoading(false)
    }
  }


  useEffect(() => {
    if (window.location.search) {
      getItems()
    }
  }, [categoryId, sortProperty, currentPage, searchValue])


  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">{categoryId}</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(9)].map((_, index) => <Skeleton key={index} />)
          : items
            .filter((obj) => {
              if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
                return true
              } return false
            })
            .map((obj) =>
              <ItemBlock
                key={obj.id}
                id={obj.id}
                title={obj.title}
                price={obj.price}
                image={obj.imageUrl}
                sizes={obj.sizes}
                types={obj.types}
              />
            )
        }
      </div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </>
  )
}

export default Home