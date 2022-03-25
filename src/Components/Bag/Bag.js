import React from 'react';
import './Bag.css';

const Bag = ({bag}) => {
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
            <button className='cart-btn'>Add To Cart</button>
        </div>
    );
};

export default Bag;