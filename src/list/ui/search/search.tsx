import React, { useRef, useCallback, useState } from 'react'
import { setSearchValue } from '../../filter/state';
import { search } from '../../state';
import { useDispatch } from 'react-redux'
import debounce from 'lodash.debounce'
import styles from './search.module.scss'

function Search() {
  const dispatch = useDispatch()
  const inputRef = useRef<HTMLInputElement>(null)
  const [inputValue, setInputValue] = useState<string>('')

  const onClickClear = (event: React.MouseEvent<SVGSVGElement>) => {
    console.log('onClickClear event : ', event)
    dispatch(setSearchValue(''))
    setInputValue('')
    if (inputRef.current) {     //TS lifeHack
      inputRef.current.focus()
    }
    // inputRef.current ? focus() //TS lifeHack опциональеая последовательность

  }
  // const [items, setItems] = useState('')
  // const response = axios.get('items', {
  //   params: {
  //     search: debounce,
  //     count: 10
  //   }
  // })
  // setItem(response.data.results)

  const updateSearchValue = useCallback(
    debounce((string) => {
      dispatch(setSearchValue(string))
    }, 500),
    []
  )
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
    dispatch(search(event.target.value));
    updateSearchValue(event.target.value)
  }

  return (
    <div className={styles.serach_wrapper}>
      <div className={styles.search}>
        <svg className={styles.icon}
          viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title />
          <g id="search" color='black'><path d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z" /></g>
        </svg>
        <input
          ref={inputRef}
          value={inputValue}
          onChange={onChangeInput}
          className={styles.input}
          placeholder="поиск жду сервер " />
        {inputValue && (
          <svg
            onClick={onClickClear}
            className={styles.clearIcon}
            fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z" />
          </svg>
        )}
      </div>
    </div>
  )
}

export default Search

// <div>
//   {
//     items.map(item => {
//       <li key={item.id}>{item.name}</li>
//     })
//   }
// </div>
// overfloy-y-scroll
