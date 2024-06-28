import React, { useContext } from 'react';
import styles from './CartShop.module.css';
import PropTypes from "prop-types";
import AppContext from '../../context/AppContext';

function CartShop({ data }) {
    const { img, name, price } = data; 
   
    return (
        <div>
            <div className={styles.subContainerCart}>
                <img className={styles.smallImg} src={img} alt={name} />
                <div className={styles.information}>
                    <p className={styles.nameItem}>{name}</p>
                    <p className={styles.priceItem}>R$ {price}</p>
                    <div className={styles.rowCart}>
                        <div className={styles.addItem}>-</div>
                        <div className={styles.amount}>1</div>
                        <div className={styles.removeItem}>+</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

CartShop.propTypes = {
    data: PropTypes.shape([]

    ).isRequired,
};

export default CartShop;
