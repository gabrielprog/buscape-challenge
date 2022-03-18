import { createContext, useState, useContext } from 'react'

const Cart = createContext()

export function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    return (
        <Cart.Provider value={[cart, setCart]}>
            {children}
        </Cart.Provider>
    )
}

export function useCart() {
    const cartContext = useContext(Cart)

    return cartContext
}