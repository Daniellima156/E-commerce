import React, { useContext } from 'react';
import CartShop from './CartShop';
import styles from './Bag.module.css';
import { FiShoppingBag } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";

import AppContext from '../../context/AppContext';
import { useSpring, animated } from '@react-spring/web';

function Bag() {
    const { setCarrinho, carrinho, isMenuVisibleCart, setIsMenuVisibleCart } = useContext(AppContext);

    const subtotalPrice = carrinho.reduce((acc, item) => acc + parseFloat(item.price) * item.quantity, 0);
    const carrinhoTotalItems = carrinho.reduce((acc, item) => acc + item.quantity, 0);

    const toggleMenuVisibilityCart = () => {
        setIsMenuVisibleCart(!isMenuVisibleCart);
    };

    const removeListAll = () => {
        setCarrinho([]);
    };

    const slideInStyle = useSpring({
        transform: isMenuVisibleCart ? 'translateX(0%)' : 'translateX(100%)',
        opacity: isMenuVisibleCart ? 1 : 0,
        config: { duration: 250 },
    });

    return (
        <div>
            <animated.div
                style={slideInStyle}
                className={`${styles.containerCartShop} ${isMenuVisibleCart ? styles.visible : styles.hidden}`}
            >
                <div className={styles.titleCart}>
                    <FiShoppingBag className={styles.bagIconTitle}/>
                    <h1 className={styles.nameCart}>Carrinho</h1>
                    <h1 className={styles.nameCart}>({carrinhoTotalItems})</h1>
                    <h1 className={styles.closeIcon} onClick={toggleMenuVisibilityCart}>x</h1>
                </div>
                <div className={styles.sideScrolling}>
                    {carrinho.length === 0 ? (
                        <div className={styles.containerMsgVoid}>
                            <FaShoppingCart className={styles.iconCart}/>
                            <h1 className={styles.msgVoidTitle}>Seu carrinho está vazio. </h1>
                            <p className={styles.msgVoid}>Não deixe seu carrinho vazio por muito tempo - explore nossas coleções e encontre algo especial.</p>
                        </div>
                    ) : (
                        carrinho.map((item) => (
                            <CartShop
                                key={item.id}
                                data={{
                                    ...item,
                                    price: (item.price),
                                }}
                            />
                        ))
                    )}
                </div>
                <div className={styles.containerPayment}>
                    <div className={styles.containerSubtotal}>
                        <div className={styles.subtotal}>Sub-total:</div>
                        <div className={styles.subtotalPrice}>R$ {subtotalPrice.toFixed(2)}</div>
                    </div>
                    <button className={styles.buttonPayment}>Finalizar Compra</button>
                    <div onClick={removeListAll} className={styles.removeProductTotal}>Remover tudo</div>
                </div>
            </animated.div>
            <div className={`${isMenuVisibleCart ? styles.fullScreen : styles.visible}`} onClick={toggleMenuVisibilityCart}></div>
        </div>
    );
}

export default Bag;
