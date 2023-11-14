import { useState } from 'react'

function ItemCount({onAdd}) {

    const [count, setCount] = useState(0)

    const sumar= () =>{
        setCount(count + 1)
    }
    const restar = () =>{
        setCount(count - 1)
    }
  return (
    <div className='count'>
      <div className="count-view">
        <button disabled = {count <= 1} onClick={restar}>-</button>
        <span>{count}</span>
        <button disabled = {count >= 40} onClick={sumar}>+</button>
      </div>
        <button className='addCart' onClick={() =>{ onAdd(count)}}>Agregar al Carrito</button>
    </div>
  )
}

export default ItemCount