import React, { useState } from 'react'
import ItemCount from '../count/itemCount'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../cartContext/cartContext'
import CartContainer from '../../nav/cart/cartContainer'
import ItemsList from '../products/itemsList'

export default function ItemDetails({info = {}}) {

  const [cart, setCart] = useState(false)
  const {addCart} = useCartContext()

  const onAdd = (count) =>{
    setCart(true)
    if(count === 0){
      alert('no')
    }else{
      addCart({...info, count:count})
    }
  }

  return (
    <div className='products-details'>
      <div className='products-detail-img'>
        <img src={info.image} alt='product user select to buy' />
      </div>
      <div className="products-details-info">
        
        <h3>Details:</h3>
        <p><span>Name:</span> {info.name}</p>
        <p><span>Stock:</span> {info.stock}</p>
        <p><span>Price:</span> {info.price}$</p>
        {
          cart ? 
          <>
              <Link to='/cart' element={<CartContainer/>}>
                <button>Ir al Carrito</button>
              </Link>
              <Link to = '/' element={<ItemsList/>}>
                  <button>Seguir comprando</button>
              </Link>
          </>
          :<ItemCount initial={1} stock={40} onAdd={onAdd}/>
        }
      </div>
    </div>
  )
}

