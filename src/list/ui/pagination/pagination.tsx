import ReactPaginate from 'react-paginate';
import style from './pagination.module.scss'

type typePaginationProps = {
  onChangePage: (page: number) => void, 
  currentPage: number,
}

function Pagination({onChangePage, currentPage}:typePaginationProps) {

  return (
    <div className={style.pagination_wrapper}>
      <ReactPaginate
        className={style.list}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        forcePage={currentPage - 1}
        renderOnZeroPageCount={null}
      />
    </div>
  )
}

export default Pagination