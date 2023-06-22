import React from 'react'
import './ProductCard.css'
import Rating from './Rating'

const ProductCard = ({product}) => {
  return (
    <div className='productCard__wrapper'>
        <img className='productCard__img' src={product.image} 
        alt=' ' />
        <h4>{product.name}</h4>
        <div className='productCard__price'>
            <h5>${product.price}</h5></div>

        <div className='ProductCard__Rateing'>
            <Rating value={product.rating} 
            text={`${product.numReviews} reviews`}/>
        </div>
      <button className='ProductCard__button'>Add to Cart</button>      
    </div>
  )
}

export default ProductCard