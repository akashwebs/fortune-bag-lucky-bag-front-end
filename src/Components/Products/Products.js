import React, { useEffect, useState } from 'react';
import { getRandomProduct } from '../../Utilities/Rendom';
import Bag from '../Bag/Bag';
import ChooseProduct from '../ChooseProduct/ChooseProduct';
import './Products.css'

import RandomProduct from '../RandomProduct/RandomProduct';



const Products = () => {
    // fetch product
    const [bags, setBags] = useState([]);
    // add to cart state
    const [fortuneProduct, setFortuneProduct] = useState([])
    

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setBags(data))
    }, [])

    // --------------rendomly prodcut select
   
    // --------------for modals   
   
    // for get random product with store
    

    // set product in cart
    const addToCart = bag => {

        const checkProduct = fortuneProduct.find(product => product.id === bag.id);
        if (!checkProduct) {

            const newBags = [...fortuneProduct, bag];
            setFortuneProduct(newBags);
        } else {
            alert('product choose only one time')
        }
    }

    return (
        <div className='container'>
            <div className='product-container'>
                {
                    bags.map(bag => <Bag
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

                        fortuneProduct.map(product => <ChooseProduct
                            fortuneProduct={product}
                            key={product.id}

                        ></ChooseProduct>)
                    }
                    <RandomProduct fortuneProduct={fortuneProduct}></RandomProduct>
                    

                </div>
            </div>

           
        </div>
    );
};

export default Products;