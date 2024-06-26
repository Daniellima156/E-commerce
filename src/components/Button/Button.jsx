import React from 'react'
import styles from './Button.module.css'
import { FaShoppingCart } from "react-icons/fa";
import { BsArrowRightCircle } from "react-icons/bs";


function Button() {
  return (
    <div>
      <div className={styles.containerButtons}>
        <div className={styles.buttonBuy}><button>Comprar<BsArrowRightCircle /></button></div>
        <div className={styles.buttonCart}><button><FaShoppingCart /></button></div>
      </div>
    </div>
  )
}

export default Button
