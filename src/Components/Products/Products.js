import React, { useEffect, useState } from 'react';
import Bag from '../Bag/Bag';
import ChooseProduct from '../ChooseProduct/ChooseProduct';
import './Products.css'

const Products = () => {
    const [bags, setBags]=useState([]);
    const [fortuneProduct, setFortuneProduct]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setBags(data))
    },[])
    
    const addToCart=bag=>{
        const checkProduct=fortuneProduct.find(product=>product.id===bag.id);
        let count=0;
        if(!checkProduct){
            bag['fortune']=++count;
            const newBags=[...fortuneProduct,bag];
            setFortuneProduct(newBags);
        }else{
            alert('one product only choose ')
        }
    }

    return (
        <div className='container'>
            <div className='product-container'>
                {
                    bags.map(bag=><Bag 
                        bag={bag}
                        key={bag.id}
                        addToCart={addToCart}
                        ></Bag>)
                }
            </div>
            <div className='fortune-box-conatiner'>
                <div className='fortune-box'>
                <h3>Fortune Box</h3>
                {

                    fortuneProduct.map(product=> <ChooseProduct fortuneProduct={product}></ChooseProduct>)
                }
                    
                </div>
            </div>
        </div>
    );
};

export default Products;