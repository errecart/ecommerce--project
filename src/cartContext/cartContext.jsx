import { useContext,createContext, useState } from "react";


const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

const CartContextProv = ({children}) =>{
    const [cartList, setCartList] = useState([])

    
    const addCart = (item, quantity) =>{
        if(isInCart(item.id)){
            setCartList(cartList.map(product => {
                return product.id === item.id ? {...product, quantity: product.quantity + quantity} : product
            }))
        }else{
            setCartList([...cartList, {...item, quantity}])
        }
    }
    
    const isInCart = (id) => cartList.find(prod => prod.id === id) ? true : false
    

    const removeCart = (id) =>{
        return setCartList(cartList.filter(prod => prod.id !== id ) )
    }

    const clearCart = () =>{
        setCartList([])
    }

    const cartProducts = () =>{
        return cartList.reduce((acu, prodA) => acu + prodA.count, 0)
    }

    const fullPrice = () =>{
        return cartList.reduce((acum, totalProduct) => acum + totalProduct.count * totalProduct.price , 0) 
    }

    return(
            <CartContext.Provider value={{
                cartList,
                addCart,
                clearCart,
                isInCart,
                removeCart,
                fullPrice,
                cartProducts
            }}>
                {children}
            </CartContext.Provider>
    )
}

export default CartContextProv