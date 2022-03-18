import React, { useState, useEffect } from 'react'

import { useCart } from '../../providers/Cart'

import { BiMenu } from 'react-icons/bi'
import ProductCart from '../ProductCart'

import formatNumber from '../../config/formatPrice'
import Logo from '../../assets/image/logo.svg'

import './style.css'

function Header() {

	const [cart, setCart] = useCart()
	const [menu, setMenu] = useState(false)

	const handleMenu = () => {
		setMenu(!menu)
	}

	useEffect(() => {
		const cartLocal = JSON.parse(localStorage.getItem("cart"))
		
		if(cartLocal == null) return

		setCart(cartLocal)
	},[])

	return(
		<>
			<div className="header">
				<img src={Logo} alt="Logo" />

				<div className="header--menu">
					<span className="cart">{cart.length || 0}</span>
					<BiMenu onClick={() => handleMenu()} size={25} />
				</div>
			</div>

			{menu && <div className="menu--popup">
				
				{cart?.map(element => {
					return(
						<ProductCart 
						uuid={element.uuid}
						image={element.images[0]}
						title={element.title}
						price={element.price}
						installments={element.installments}
						installmentValue={element.installmentValue}
						/>
					)
				})}

				<div className="product--total">
					<span>Subtotal</span>
					<hr />
					<span>10x&nbsp;<strong>{formatNumber(cart.reduce((prev, curr) => Number(prev) + Number(curr.price), 0) / 10)}</strong></span>
					<span>Ou {
					formatNumber(
						cart.reduce(
						(prev, curr) => Number(prev) + Number(curr.price), 0
						)
					)
					} á vista</span>
				</div>

			</div>}
			
		</>
	)
}

export default Header