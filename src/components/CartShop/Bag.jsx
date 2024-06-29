import React, { useContext, useState } from 'react';
import CartShop from './CartShop';
import styles from './Bag.module.css';
import { FiShoppingBag } from "react-icons/fi";
import AppContext from '../../context/AppContext';
import { useSpring, animated } from '@react-spring/web';

function Bag() {
    const { carrinho, isMenuVisibleCart, setIsMenuVisibleCart } = useContext(AppContext);
    const toggleMenuVisibilityCart = () => {
        setIsMenuVisibleCart(!isMenuVisibleCart)
    }
    

    return (
        <div className={` ${isMenuVisibleCart ? styles.fullScreen : styles.visible}`} onClick={toggleMenuVisibilityCart}>
            <div className={`${styles.containerCartShop} ${isMenuVisibleCart ? styles.visible : styles.hidden}`}>
                <div className={styles.titleCart}>
                    <FiShoppingBag />
                    <h1 className={styles.nameCart}>Carrinho({carrinho.length})</h1>
                    <h1 className={styles.closeIcon} onClick={toggleMenuVisibilityCart}>x</h1>
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
