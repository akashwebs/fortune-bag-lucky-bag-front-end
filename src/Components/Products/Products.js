import React, { useEffect, useState } from 'react';

const Products = () => {
    const [bags, setBags]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setBags(data))

    },[])
    console.log(bags);
    return (
        <div>
            
        </div>
    );
};

export default Products;