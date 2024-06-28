import React, { useState, useContext } from 'react';
import { FaHeart, FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import { BsArrowRightCircle } from "react-icons/bs";
import { Link } from 'react-router-dom';
import styles from './Cards.module.css';
import propTypes from "prop-types";
import AppContext from '../../context/AppContext';

function Cards({ data }) {
    const [isHovered, setIsHovered] = useState(false);
    const {carrinho, setCarrinho} = useContext(AppContext)
    const { id, img, name, price } = data; 

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    const handleAddCart = () => {
        setCarrinho([...carrinho,data])

    }

    return (
        <div className={styles.containerCard}>
            <div className={styles.containerImg}>
                <Link to={`/produto/${id}`}>
                    <img className={styles.imgCards} src={img} alt={name} />
                </Link>
                {isHovered ? (
                    <FaHeart className={styles.heart} onMouseLeave={handleMouseLeave} />
                ) : (
                    <FaRegHeart className={styles.heart} onMouseEnter={handleMouseEnter} />
                )}
            </div>
            <div className={styles.description}>
                <p className={styles.name}>{name}</p>
                <div className={styles.price}>R$ {price}</div>
            </div>
            <hr className={styles.hrr} />
            <div className={styles.containerButtons}>
                <div className={styles.buttonBuy}>
                    <button>
                        Comprar <BsArrowRightCircle />
                    </button>
                </div>
                <div className={styles.buttonCart}>
                    <button onClick={handleAddCart}>
                        <FaShoppingCart />
                    </button>
                </div>
            </div>
        </div>
    );
}

Cards.propTypes = {
    data: propTypes.shape([]

    ).isRequired,
};

export default Cards;