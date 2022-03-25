
const getRandomProduct=products=>{
    return products[(Math.random() * products.length) | 0]
}

export {getRandomProduct}