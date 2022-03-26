import React, { useState } from 'react';
import './RandomProduct.css'
import Modal from 'react-modal';
import { getRandomProduct } from '../../Utilities/Rendom';
import { FaTimes } from "react-icons/fa";

Modal.setAppElement('#root');
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        textAlign:'center'
    },
};


const RandomProduct = ({fortuneProduct}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [randomProdcut, setRandomProduct] = useState([])

    const rendomProduct = () => {
      
         if (fortuneProduct.length===0) {
             alert('please select four product');
            closeModal();
        }else{
            const selectProduct = getRandomProduct(fortuneProduct);
            setRandomProduct([selectProduct]);
            openModal();
        }

    }
   
    const openModal = () => {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div>
            <button onClick={rendomProduct} className='choose-button'>CHOOSE 1 FOR ME</button>
            <div className='modals'>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
               
            >
                <button onClick={closeModal} className='close-button-modal'><FaTimes></FaTimes></button>
                <h1>Congratulation...</h1>
                <img src={randomProdcut[0]?.image} className='random-image' alt="" />
                <h2>{randomProdcut[0]?.name}</h2>
            </Modal>
            </div>
        </div>
    );
};

export default RandomProduct;