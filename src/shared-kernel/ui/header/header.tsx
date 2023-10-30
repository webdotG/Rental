import { useEffect, useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { UseAuth } from "../../../auth/ui/use-auth";
import { useAppDispatch } from "../../store";
import { selectCart } from "../../../cart/state";
import { removeUser } from '../../../auth/state';
// import Search from "../search/search"
import style from './header.module.scss'

function Header() {
  const location = useLocation()
  const dispatch = useAppDispatch()
  const { items, totalPrice } = useSelector(selectCart)
  const { isAuth, email } = UseAuth()
  const isMounted = useRef(false)
  const totalCount = items.reduce((sum, item) => sum + item.count, 0)

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items)
      // console.log(json)
      localStorage.setItem('cart', json)
    }
    isMounted.current = true
  }, [items])

  return (
    <div className={style.header_wrapper}>
      <header className={style.header}>
        <div className={style.logo_wrapper}>
          <div className={style.header__logo}>
            <Link className={style.header__logo_link}
              to="/Rental">
                <img className={style.header__logo_img} alt="logo" src="data:image/png;base64,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" />
              {/* <img className={style.header__logo_img} src='../../../public/logoTest.svg' alt="logo" /> */}
            </Link>
            {/* <div className={style.header_title}>
              <h1>СИТ аренда</h1>
              <p>аренда строительной техники</p>
            </div> */}
          </div>

        </div>

        {location.pathname !== "/Rental/login" && location.pathname !== "/Rental/register" && (
          <div className={style.header_user}>
            <div className={style.header__login}>
              { isAuth
              ? <svg width='40px' height='50px' fill="black"  id="Icons_User" overflow="hidden" version="1.1" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
              <g>
                <circle  cx="48" cy="30" r="16" />
                <path width='40px' height='50px'  d=" M 80 82 L 80 66 C 80 63.6 78.8 61.2 76.8 59.6 C 72.4 56 66.8 53.6 61.2 52 C 57.2 50.8 52.8 50 48 50 C 43.6 50 39.2 50.8 34.8 52 C 29.2 53.6 23.6 56.4 19.2 59.6 C 17.2 61.2 16 63.6 16 66 L 16 82 L 80 82 Z" />
              </g>
            </svg>
            : <Link to="/Rental/login" className={style.button__login}>
                <svg  fill="black"  id="Icons_User" overflow="hidden" version="1.1" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <circle  cx="48" cy="30" r="16" />
                    <path width='40px' height='50px'  d=" M 80 82 L 80 66 C 80 63.6 78.8 61.2 76.8 59.6 C 72.4 56 66.8 53.6 61.2 52 C 57.2 50.8 52.8 50 48 50 C 43.6 50 39.2 50.8 34.8 52 C 29.2 53.6 23.6 56.4 19.2 59.6 C 17.2 61.2 16 63.6 16 66 L 16 82 L 80 82 Z" />
                  </g>
                </svg>
              </Link>
              }
              {
                isAuth
                  ? (<div>
                    <Link className={style.personal_office} 
                    to='/Rental/personaloffice'>
                   
                   {location.pathname !== '/Rental/personaloffice' &&  
                    <h4 className={style.auth__active}>{email}
                    <br/>перейти в кабинет</h4>
                   }
                    <button className={style.auth__active_button}
                      onClick={() => dispatch(removeUser())}>
                      выйти</button>
                      </Link>
                  </div>
                  )
                  : (<h4 className={style.auth}>войти</h4>)
              }
            </div>

            {location.pathname !== '/Rental/cart' && (
              <div className={style.header__cart}>
                <Link to="/Rental/cart" className={style.button__cart}>
                  <span className={style.button__cart_price}>{totalPrice} ₽</span>
                </Link>
                <Link to="/Rental/cart" className={style.button__cart }>
                  <div className={style.button__cart_count}>
                    <svg
                    fill="white"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                        stroke="black"
                        fill="rgb(255, 215, 0)"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                        stroke="black"
                        fill="rgb(255, 215, 0)"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                        stroke="black"
                        fill="rgb(255, 215, 0)"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{totalCount}</span>
                  </div>
                </Link>
              </div>
            )}
          </div>

        )}
        {/* { location.pathname === '/Rental/' && <Search />} */}
      </header >
    </div>
  )

}

export default Header
