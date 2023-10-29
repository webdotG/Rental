import Header from './shared-kernel/ui/header/header';

import HomePage from './list/ui/home';
import ItemPage from './list/item/ui/pageItem';

import CartPage from './cart/ui/cartPage';
import NotFound from './shared-kernel/ui/notFound';
import LoginPage from './auth/ui/pageLogin';
import RegisterPage from './auth/ui/pageRegister'
import PersonalOfficePage from './user/ui/personalOfficePage'

import { Routes, Route } from "react-router-dom";

import './shared-kernel/ui/normalize.scss'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path='/Rental/login' element={ <LoginPage />} />
          <Route path='/Rental' element={<HomePage />} />
          <Route path='/Rental/register' element={<RegisterPage />} />
          <Route path='/Rental/personaloffice' element={<PersonalOfficePage /> }/>
          <Route path='/Rental/cart' element={<CartPage />} />
          <Route path='/Rental/item/:id' element={<ItemPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
