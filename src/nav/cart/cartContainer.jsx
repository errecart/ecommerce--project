import React, { useState } from 'react'
import { useCartContext } from '../../cartContext/cartContext'
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from 'firebase/firestore'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import Form from './form'


export default function CartContainer() {
  const {cartList, clearCart, removeCart, isInCart, fullPrice} = useCartContext()
  const {cartView} = useState(false)
  const MySwal = withReactContent(Swal)

  const cart = () =>{
    cartView(true)
  }

  const buy = async() =>{
    const order = {}
    order.buyer = {name: 'juan', phone: 123456789, email: 'email@gmail.com'}

    order.prodcuts = cartList.map(prod =>{
      return{
        id: prod.id,
        name: prod.name,
        price: prod.price,
        count: prod.count
      }
    })
    order.total = fullPrice()

    const db = getFirestore()
    const querryCart = collection(db, 'orders')
    addDoc(querryCart, order)
    .then(({id}) => console.log(id))
    .catch(MySwal.fire({
      title: <p>error Analyzing the info, please wait a momemnt</p>,
    }))
    .finally(clearCart())

    const stockCollection = collection(db, 'productos')

    const newStock = query(
      stockCollection,                  
      where( documentId() , 'in', cartList.map(prod => prod.id) )         
    )

    const batch = writeBatch(db)

    await getDocs(newStock)
    .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
        stock: res.data().stock - cartList.find(item => item.id === res.id).count
    })))
    .catch( MySwal.fire({
      title: <p>error Analyzing the info, please wait a momemnt</p>,
    }))
    .finally(
       MySwal.fire(<p>Congratulations with your purchase!!</p>)
    )

    batch.commit()

  }

  return (
    <>
    <section className='cart'>
      <div className="cart-products">
        {isInCart}
        {cartList.length === 0 ? <span>No Products</span> : 
          <>
            {cart}
            {cartList.map(prod => 
              <div key={prod.id} className='product'>
                <ul>
                  <li>
                    <div>
                      <img src={prod.image} alt="product you enter in the cart"/>
                      <h5>{prod.name}</h5>
                    </div>
                    <div className='prod-info'>
                      <p><span>Price:</span> {prod.price}:00$</p>
                      <p><span>Count:</span>  {prod.count}</p>
                    </div>
                    <button onClick={()=>removeCart(prod.id)}>X</button>
                  </li>
                </ul>
              </div>
            )}
            <button className='clear' onClick={()=>clearCart()}>Clear Cart</button>
          </>}
      </div>
      
      <div className='cart-form'>
        <Form />
        <p>Total Price: {fullPrice() || 0}$</p>
        <button className='buy' onClick={buy}>Buy All</button>
      </div>
    </section>
    </>
  )
}


