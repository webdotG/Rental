import Header from './components/header/header';
import Home from './pages/home';
import Cart from './pages/cart';
import NotFound from './pages/notFound';
import { Routes, Route } from "react-router-dom";
import { useState, createContext } from 'react';
import './scss/app.scss'

export const SearchContext = createContext('')

function App() {

  const [searchValue, setSearchValue] = useState('')

  // console.log('searchValue: ' + searchValue)

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{searchValue, setSearchValue}}>
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path='/Rental' element={<Home searchValue={searchValue} />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  )
}


export default App;
