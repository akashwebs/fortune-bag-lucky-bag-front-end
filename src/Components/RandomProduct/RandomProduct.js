import React, { useState } from 'react';
import './RandomProduct.css'
import Modal from 'react-modal';
import { getRandomProduct } from '../../Utilities/Rendom';

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


const RandomProduct = ({fortuneProduct}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [randomProdcut, setRandomProduct] = useState({})

    const rendomProduct = () => {

        if (fortuneProduct) {
            const selectProduct = getRandomProduct(fortuneProduct);
            setRandomProduct(selectProduct);
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
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <img src={randomProdcut.image} className='random-image' alt="" />
                <h2>{randomProdcut.name}</h2>
            </Modal>
        </div>
    );
};

export default RandomProduct;