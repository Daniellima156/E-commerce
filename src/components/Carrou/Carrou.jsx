import React from 'react';
import styles from './Carrou.module.css';
import Carousel from "../Carousel/Carousel/"
import productTwo from '../assets/data1'
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";



function Carrou() {
    console.log(productTwo); // Verifique se os dados estão corretos
    
    return (
        <div className={styles.containerCarousel}>
            <Swiper
                slidesPerView={3}
                pagination={false}
                spaceBetween={0}
                loop={true}
                navigation={{
                    nextEl: ".buttonNext",
                    prevEl: ".buttonPrev",
                }}
                breakpoints={{
                    390: {
                        slidesPerView: 1,
                    },
                    600: {
                        slidesPerView: 3,
                    },
                
                }}>
            
                {productTwo.map((carousel, i) => (
                    <SwiperSlide key={i}>
                        <Carousel  id={carousel.id} img={carousel.img} name={carousel.name} price={carousel.price} discount={(carousel.price / carousel.discount).toFixed(2)} />
                    </SwiperSlide>
                ))}
                <FaArrowAltCircleRight className={`${styles.buttonNext} buttonNext`} />
                <FaArrowAltCircleLeft className={`${styles.buttonPrev} buttonPrev`} />
                
            </Swiper>







        </div>
    );
}

export default Carrou;
