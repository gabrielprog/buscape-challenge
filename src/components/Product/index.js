import React, { useEffect } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'

import { useCart } from '../../providers/Cart'

import formatNumber from '../../config/formatPrice'

import './style.css'

function Product({
	images, 
	uuid,
	title,
	price,
	installments,
	installmentValue
}) {

	const [cart, setCart] = useCart()

	const handleAddToCart = () => {
		
		if(cart.length >= 99) return

		setCart([...cart, { 
			images, 
			uuid,
			title,
			price,
			installments,
			installmentValue
		}])
	}

	const handleChangeImage = (event) => {
		const currentImage = event.target.src
		const currentImageMain = document.getElementById(uuid)

		currentImageMain.src = currentImage
	}

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart))
	},[cart])

	return (
		<div className="box--product">
			<div className="product--galery">
				{images?.map(element => {
					return(
						<img
						onClick={(e) => handleChangeImage(e)} 
						src={element} 
						alt="Gallery of image" />
					)
				})}
				
			</div>

			<div className="product--view">
				<img 
				id={uuid} 
				src={images[0]} 
				alt="Gallery of image"
				/>

			</div>
			
			<div className="product--detail">
				<div className="product--title">
					<span>{title}</span>
					<AiOutlineHeart size={14} />
				</div>

				<div className="product--price">

					<div className="price text-price">
						<span>{installments}x&nbsp;<strong>{formatNumber(installmentValue)}</strong></span>
						<button onClick={() => handleAddToCart()}>+</button>
					</div>

					<span className="text-price">Ou {formatNumber(price)} á vista</span>
				</div>
			</div>
		</div>
	)
}

export default Product