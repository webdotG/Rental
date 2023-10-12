import Header from './components/header/header';
import Home from './pages/home';
import Cart from './pages/cart';
import NotFound from './pages/notFound';
import { Routes, Route } from "react-router-dom";
import './scss/app.scss'


function App() {

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path='/Rental' element={<Home />} />
            <Route path='/Rental/cart' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}


export default App;
