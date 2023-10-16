import ReactPaginate from 'react-paginate';
import style from './pagination.module.scss'

type typePaginationProps = {
  onChangePage: number, 
  currentPage: any,
}

function Pagination({onChangePage, currentPage}:typePaginationProps) {

  return (
    <>
      <ReactPaginate
        className={style.root}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={10}
        forcePage={currentPage - 1}
        renderOnZeroPageCount={null}
      />
    </>
  )
}

export default Pagination