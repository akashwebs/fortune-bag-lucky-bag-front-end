import React, { useEffect, useState } from 'react';
import Bag from '../Bag/Bag';
import './Products.css'

const Products = () => {
    const [bags, setBags]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setBags(data))
    },[])
    console.log(bags);
    return (
        <div className='container'>
            <div className='product-container'>
                {
                    bags.map(bag=><Bag 
                        bag={bag}
                        key={bag.id}
                        ></Bag>)
                }
            </div>
            <div className='fortune-box-conatiner'>
                <div className='fortune-box'>a</div>
            </div>
        </div>
    );
};

export default Products;