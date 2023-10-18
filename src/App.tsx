import Header from './components/header/header';
import Home from './pages/home';
import Cart from './pages/cart';
import NotFound from './pages/notFound';
import ItemPage from './pages/pageItem';
import Login from './pages/login';
import Register from './pages/register'
import { Routes, Route } from "react-router-dom";
import './scss/app.scss'



function App() {

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path='/Rental/' element={<Register />} />
            <Route path='/Rental/home' element={<Home />} />
            <Route path='/Rental/login' element={<Login />} />
            <Route path='/Rental/cart' element={<Cart />} />
            <Route path='/Rental/item/:id' element={<ItemPage />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}


export default App;
