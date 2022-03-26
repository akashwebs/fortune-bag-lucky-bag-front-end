import React from 'react';
import './ChooseProduct.css'
import { FaTrashAlt } from 'react-icons/fa';

const ChooseProduct = ({fortuneProduct,removeFromCartWithTrash}) => {
    const {name,image,id}=fortuneProduct;
    return (
        <div className='choose-product'>
            <img src={image} alt="" />
            <p>{name.slice(0,12)}...</p>
            <div onClick={()=>removeFromCartWithTrash(id)} className='tarsh-button'>
            <FaTrashAlt></FaTrashAlt>
            </div>
        </div>
    );
};

export default ChooseProduct;