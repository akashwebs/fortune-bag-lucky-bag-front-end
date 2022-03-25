
const getRandomProduct=products=>{
    var rand = products[(Math.random() * products.length) | 0]
    console.log(rand)
}

export {getRandomProduct}