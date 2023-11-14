import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useCartContext } from '../../cartContext/cartContext'

function CartWidget() {
    const {cartProducts} = useCartContext()

    return (
        <>
            <div className="icon">
                <span>{cartProducts() || ''}</span>
                <FontAwesomeIcon icon = {faCartShopping}/>
            </div>
        </>
    )
}

export default CartWidget