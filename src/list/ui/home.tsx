import { useEffect, useCallback } from 'react'  //, useRef
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from '../../shared-kernel/store';
// import { useNavigate } from 'react-router-dom'
import { setCategoryId, setCurrentPage } from "../filter/state"; // setFilters 
import { fetchItems } from '../api' // typeSearchItemParams
import { typeItem } from '../types';
import { filterItems } from '../state';
// import qs from 'qs'
import Categories from './categories/categories';
// import  { sortList } from '../components/sort/sort';
import Sort from './sort/sort';
import Skeleton from './skeleton';
// import Pagination from './pagination/pagination';
import ItemBlock from './itemBlock/itemBlock';
import Search from "./search/search"
import style from './homePage.module.scss'
import Footer from '../../shared-kernel/ui/footer/footer';

function Home() {
  // const navigate = useNavigate()
  const dispatch = useAppDispatch()
  // const isSearch = useRef(false)
  // const isMounted = useRef(false)
  const categoryId = useSelector((state: RootState) => state.filter.categoryId)
  const sortProperty = useSelector((state: RootState) => state.filter.sort.sortProperty)
  const currentPage = useSelector((state: RootState) => state.filter.currentPage)
  const searchValue = useSelector((state: RootState) => state.filter.searchValue)
  const items = useSelector((state: RootState) => {
    if (state.items.filteredItems.length) {
      return state.items.filteredItems;
    }
    return state.items.items;
  })
  const status = useSelector((state: RootState) => state.items.status)

  const onChangeCategory = useCallback((id: number) => {
    dispatch(setCategoryId(id))
  }, [])

  // const onChangePage = (page: number) => {
  //   dispatch(setCurrentPage(page))
  // }

  const getItems = async () => {
    window.scrollTo(0, 0)
    const sortBy = sortProperty.replace('-', '');
    const order = sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : ''; // &${search}
    dispatch(fetchItems({ sortBy, order, category, currentPage, search }));
    // dispatch(filterItems({ categoryId }));
  }
  useEffect(() => {
    getItems()
  }, [])
  useEffect(() => {
    dispatch(filterItems({ categoryId }));
  }, [categoryId]) //, currentPage

  const skeleton = [...new Array(9)].map((_, index) => <Skeleton key={index} />)
  const itemArray = items.map((obj: typeItem) => {
    // console.log('OBJ IS:', obj)
    return <ItemBlock key={obj.id} {...obj} />;
  });

  return (
    <>
      <div className="content__top">
        <Search />
        <div className={style.tabelet_width_wrapper}>
          <Categories value={categoryId} onChangeCategory={onChangeCategory} />
          <Sort />
        </div>
      </div>
      <div className={style.content__title_wrapper}>
        <h2 className={style.content__title}>id категории :  {categoryId}</h2>
      </div>
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
      {/* <Pagination currentPage={currentPage} onChangePage={onChangePage} /> */}
      <Footer />
    </>
  )
}

export default Home
