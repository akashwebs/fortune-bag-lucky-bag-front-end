import React from 'react';
import './ChooseProduct.css'
import { FaTrashAlt } from 'react-icons/fa';

const ChooseProduct = ({fortuneProduct,removeFromCartWithTrash}) => {
    const {name,image,id}=fortuneProduct;
    return (
        <div className='choose-product'>
            <div className='choose-image'>
            <img src={image} alt="" />
            </div>
            <p>{name.slice(0,12)}...</p>
            <div onClick={()=>removeFromCartWithTrash(id)} >
            <FaTrashAlt className='tarsh-button'></FaTrashAlt>
            </div>
        </div>
    );
};

export default ChooseProduct;