import React from 'react';

import { AiOutlineClose } from 'react-icons/ai'

import { useCart } from '../../providers/Cart'

import './style.css';

import formatNumber from '../../config/formatPrice'

function ProductCart({
    uuid,
    image,
    title,
    price,
    installments,
    installmentValue
}) {

    const [cart, setCart] = useCart()

    const deleteItem = () => {
        const removeIndex = cart.filter(elem => elem.uuid !== uuid)
        
        setCart(removeIndex)
        localStorage.setItem("cart", JSON.stringify(cart))
    }
    
    return (
        <div className="product--cart">
            <div className="cart--image">
                <img src={image} alt="Product view cart"/>
            </div>

            <div className="cart--details">
                <span>{title}</span>
                <span>{installments}x&nbsp;<strong>{formatNumber(installmentValue)}</strong></span>
                <span>Ou {formatNumber(price)} á vista</span>
            </div>

            <AiOutlineClose onClick={() => deleteItem()} size={12} />
        </div>
    );
}

export default ProductCart;