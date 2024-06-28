import React, { useContext } from 'react';
import CartShop from './CartShop';
import styles from './Bag.module.css';
import { FiShoppingBag } from "react-icons/fi";
import AppContext from '../../context/AppContext';

function Bag() {
    const { carrinho } = useContext(AppContext);

    return (
        <div>
            <div className={styles.containerCartShop}>
                <div className={styles.rowCart}>
                    <FiShoppingBag />
                    <h1 className={styles.nameCart}>Carrinho({carrinho.length})</h1>
                </div>
                <div>
                    {carrinho.map((item) => (
                        <CartShop key={item.id} data={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Bag;
