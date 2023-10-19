import Header from './components/header/header';
import HomePage from './pages/pageHome';
import CartPage from './pages/pageCart';
import NotFound from './pages/pageNotFound';
import ItemPage from './pages/pageItem';
// import LoginPage from './pages/pageLogin';
// import RegisterPage from './pages/pageRegister'
import { Routes, Route } from "react-router-dom";
import './scss/app.scss'



function App() {

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            {/* <Route path='/Rental/' element={ <LoginPage />} /> */}
            <Route path='/Rental' element={<HomePage />} />
            {/* <Route path='/Rental/register' element={<RegisterPage />} /> */}
            <Route path='/Rental/cart' element={<CartPage />} />
            <Route path='/Rental/item/:id' element={<ItemPage />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}


export default App;
