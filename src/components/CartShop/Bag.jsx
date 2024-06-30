import React, { useContext, useState } from 'react';
import CartShop from './CartShop';
import styles from './Bag.module.css';
import { FiShoppingBag } from "react-icons/fi";
import AppContext from '../../context/AppContext';
import { useSpring, animated } from '@react-spring/web';

function Bag() {
    const { carrinho,isMenuVisibleCart, setIsMenuVisibleCart, count } = useContext(AppContext);
    const subtotalPrice = carrinho.reduce((acc, item) => acc + parseFloat(item.price), 0);
    const toggleMenuVisibilityCart = () => {
        setIsMenuVisibleCart(!isMenuVisibleCart)
    }
    const initialQuantity = 1
    
    const slideInStyle = useSpring({
        transform: isMenuVisibleCart ? 'translateX(0%)' : 'translateX(100%)',
        opacity: isMenuVisibleCart ? 1 : 0,
        config: { duration: 250 },
    });

    return (
        <div>
            <animated.div style={slideInStyle} className={`${styles.containerCartShop}  onClick={() => setIsMenuVisibleCart(!isMenuVisibleCart)}${isMenuVisibleCart ? styles.visible : styles.hidden}`}>
                <div className={styles.titleCart}>
                    <FiShoppingBag />
                    <h1 className={styles.nameCart}>Carrinho({carrinho.length})</h1>
                    <h1 className={styles.closeIcon} onClick={toggleMenuVisibilityCart}>x</h1>
                </div>
                <div className={styles.sideScrolling}>
                    {carrinho.map((item) => (
                        <CartShop key={item.id} data={item} quantity= {initialQuantity} />
                    ))}
                </div>
                <div className={styles.containerPayment}>
                    <div className={styles.containerSubtotal}>
                        <div className={styles.subtotal}>Sub-total:</div>
                        <div className={styles.subtotalPrice}>R$ {subtotalPrice.toFixed(2)}</div>
                    </div>
                    <button className={styles.buttonPayment}>Finalizar Compra</button>
                    <div className={styles.removeProductTotal}>Remover tudo</div>
                </div>
            </animated.div>
            <div className={` ${isMenuVisibleCart ? styles.fullScreen : styles.visible}`} onClick={toggleMenuVisibilityCart}></div>

        </div>
    );
}

export default Bag;
