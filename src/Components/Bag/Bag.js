import React from 'react';
import './Bag.css';
import { FaCartPlus } from 'react-icons/fa';

const Bag = ({bag,addToCart}) => {
    const {name, image, price}=bag;
    return (
        <div className='product'>
            <div className='product-image'>
                <img src={image} alt="" />
            </div>
            <div className='bag-info'>
            <h2>{name}</h2>
            <h4>price: ${price}</h4>
            </div>
            <button onClick={()=>addToCart(bag)} className='cart-btn'>Add To Cart 
                <span className='icon'><FaCartPlus /></span> 
            </button>
        </div>
    );
};

export default Bag;