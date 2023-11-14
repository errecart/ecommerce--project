import CartWidget from './cart/CartWidget'
import Navbar from 'react-bootstrap/Navbar';
import Header from './header';
import { Link } from 'react-router-dom';

export default function NavBar() {

  return (
  <>
    <Navbar expand="lg" className="nav">
        <Link to='/'>
          <Navbar.Brand><h1>My-Shop</h1></Navbar.Brand>
        </Link>
        <div className="nav-list">
          <Link to='/cart'>
              <CartWidget/>
          </Link>
        </div>
    </Navbar>
      <Header/>
  </>
  )
}
