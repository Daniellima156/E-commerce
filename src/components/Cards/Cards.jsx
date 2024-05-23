import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
import styles from './Cards.module.css';
import Button from '../Button/Button';



function Cards(props) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className={styles.containerCard}>
            <div className={styles.containerImg}>
                <Link><img className={styles.imgCards} src={props.img} /></Link>
                {isHovered ? (
                    <FaHeart  className={styles.heart} onMouseLeave={handleMouseLeave} />
                ) : (
                    <FaRegHeart className={styles.heart} onMouseEnter={handleMouseEnter} />
                )}
            </div>
            <div className={styles.description}>
                <p className={styles.name}>{props.name}</p>
                <div className={styles.price}>R$ &nbsp;{props.price}</div>
            </div>
            <hr className={styles.hrr}/>
            <Button/>
            
            
        </div>
    );
}

export default Cards;
