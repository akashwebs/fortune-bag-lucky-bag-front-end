import React, { useEffect, useState } from 'react';
import { getRandomProduct } from '../../Utilities/Rendom';
import Bag from '../Bag/Bag';
import ChooseProduct from '../ChooseProduct/ChooseProduct';
import './Products.css'
import Modal from 'react-modal';
Modal.setAppElement('#root');
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};




const Products = () => {
    // fetch product
    const [bags, setBags] = useState([]);
    // add to cart state
    const [fortuneProduct, setFortuneProduct] = useState([])
    const [randomProdcut, setRandomProduct] = useState({})
    const [modalIsOpen, setIsOpen] = React.useState(false);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setBags(data))
    }, [])

    // --------------rendomly prodcut select
    const rendomProduct = () => {

        if (fortuneProduct) {
            const selectProduct = getRandomProduct(fortuneProduct);
            setRandomProduct(selectProduct);
            openModal();
        }


    }
    // --------------for modals   
    const openModal = () => {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
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
                    <button onClick={rendomProduct} className='choose-button'>CHOOSE 1 FOR ME</button>

                </div>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <img src={randomProdcut.image} alt="" />
                <h2>{randomProdcut.name}</h2>
            </Modal>
        </div>
    );
};

export default Products;