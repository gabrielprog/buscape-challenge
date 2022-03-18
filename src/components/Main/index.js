import React, { useEffect, useState } from 'react'

import api from '../../services/Cart'

import Product from '../Product'

import './style.css'

function Main() {

	const [products, setProducts] = useState()

	const fetchProducts = async () => {
		const contentProduct = await api.get('items')
		
		setProducts(contentProduct.data)
		
	}

	useEffect(() => {
		fetchProducts()
	},[])

	return (
		<div className="view--products">
			{products?.map((element,index) => {
				const product = element.product
				product.id = Math.floor(Math.random() * 9999)

				return (
					<Product 
					title={product.name}
					price={product.price.value}
					installments={product.price.installments}
					installmentValue={product.price.installmentValue}
					images={product.images} 
					uuid={product.id} 
					key={index}
					/>
				)
			})}
			
		</div>
	)
}

export default Main