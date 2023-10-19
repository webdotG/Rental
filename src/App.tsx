import Header from './components/header/header';
import HomePage from './pages/home';
import CartPage from './pages/cart';
import NotFound from './pages/notFound';
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
  )
}


export default App;
