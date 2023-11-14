import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import NavBar from './nav/navBar';
import CartContainer from './nav/cart/cartContainer';
import ItemDetailContainer from './pages/details/itemDetailContainer';
import CartContextProv from './cartContext/cartContext';
import Footer from './footer/footer';
import ItemsList from './pages/products/itemsList';


function App() {
  return (
      <BrowserRouter>
        <CartContextProv>
          <div className="app">
            <NavBar />
              <Routes>
                <Route path='/' element={<ItemsList/>}/>
                <Route path='/categories/:categoryId' element={<ItemsList/>}/>
                <Route path='/details/:productId' element={<ItemDetailContainer/>}/>
                <Route path='/cart' element={<CartContainer/>}/>
                <Route path='*' element={<Navigate to='/'/>}/>
              </Routes>
            <Footer/>
          </div>
        </CartContextProv>
      </BrowserRouter>
  );
}

export default App;
