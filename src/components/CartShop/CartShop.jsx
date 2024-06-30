import React, { useContext, useState, useEffect } from 'react';
import styles from './CartShop.module.css';
import PropTypes from 'prop-types';
import { FaRegTrashAlt } from 'react-icons/fa';
import AppContext from '../../context/AppContext';

function CartShop({ data }) {
    const { id, img, name, price, quantity } = data;   
    const { carrinho, setCarrinho } = useContext(AppContext);
    const [count, setCount] = useState(quantity || 1);

    useEffect(() => {
        const updatedItems = carrinho.map(item =>
            item.id === id ? { ...item, quantity: count } : item
        );
        setCarrinho(updatedItems);
    }, [count]);

    const incrementNumber = () => {
        setCount(count + 1);
    };

    const decrementNumber = () => {
        if (count > 1) {
            setCount(count - 1);
        } else {
            handleRemoveItem();
        }
    };

    const handleRemoveItem = () => {
        const updatedItems = carrinho.filter(item => item.id !== id);
        setCarrinho(updatedItems);
    };

    

    return (
        <div>
            <div className={styles.subContainerCart}>
                <img className={styles.smallImg} src={img} alt={name} />
                <div className={styles.information}>
                    <div className={styles.containerTitle}>
                        <p className={styles.nameItem}>{name} </p>
                        <FaRegTrashAlt onClick={handleRemoveItem} className={styles.trashIcon} />
                    </div>
                    <p className={styles.priceItem}>R$ {price} <span>cada</span></p>

                    <div className={styles.rowCart}>
                        <div onClick={decrementNumber} className={styles.buttonAmount}>-</div>
                        <div className={styles.amount}>{count}</div>
                        <div onClick={incrementNumber} className={styles.buttonAmount}>+</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

CartShop.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number,
    }).isRequired,
};

export default CartShop;
