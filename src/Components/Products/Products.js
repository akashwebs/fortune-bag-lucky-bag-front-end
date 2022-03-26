import React, { useEffect, useState } from 'react';
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

    //   remove product with trash button
    const removeFromCartWithTrash=(id)=>{
        const allProduct=[...fortuneProduct];
       for(let i=0; i<allProduct.length; i++ ){
        if(allProduct[i].id===id){
            allProduct.splice(i, 1); 
            setFortuneProduct(allProduct);
        }
       }
    }
   
    // choose again
    const chooseAgain=()=>{
        setFortuneProduct([]);
    }

    // set product in cart
    const addToCart = bag => {

        const checkProduct = fortuneProduct.find(product => product.id === bag.id);
        if (!checkProduct) {
            if(fortuneProduct.length<=3){
                const newBags = [...fortuneProduct, bag];
                setFortuneProduct(newBags);
            }else{
                alert('you can not choose more then 4 product')
            }
        } else {
            alert('Already added in fortune box')
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
                    <h2>Fortune Box</h2>
                    {

                        fortuneProduct.map(product => <ChooseProduct
                            fortuneProduct={product}
                            key={product.id}
                            removeFromCartWithTrash={removeFromCartWithTrash}

                        ></ChooseProduct>)
                    }
                    <RandomProduct fortuneProduct={fortuneProduct}></RandomProduct>   
                    <button onClick={chooseAgain} className=' choose-again'>CHOOSE AGAIN</button>

                </div>
            </div>
        </div>
    );
};

export default Products;