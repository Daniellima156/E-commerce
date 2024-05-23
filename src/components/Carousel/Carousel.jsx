import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Carousel.module.css';



function Carousel(props) {

  return (
    <div className={styles.containerMain}>
      <div className={styles.containerUp}>
        <img src={props.img} alt={props.name} />
      </div>
      <div className={styles.containerDown}>
        <p className={styles.containerName}>{props.name}</p>
        <h2 className={styles.containerPrice}>R$ {props.price}</h2>
        <p className={styles.containerDiscount}><span className={styles.fontsize}>3X</span> de <span className={styles.fontsize}>{props.discount}</span> sem <span className={styles.fontsize}>juros</span></p>
      </div>
      
    </div>
  )


}

export default Carousel;
