import React from 'react';
import styles from './Carrou.module.css';
import Carousel from "../Carousel/Carousel/"
import productTwo from '../assets/data1'
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Carrou() {
    console.log(productTwo); // Verifique se os dados estão corretos
    return (
        <div className={styles.containerCarousel}>
            <Swiper
                slidesPerView={4}
                pagination={false}
                spaceBetween={0}

                loop={true}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                breakpoints={{
                    390: {
                        slidesPerView: 1.2,
                    },
                    600: {
                        slidesPerView: 3,
                    },
                    1111: {
                        slidesPerView: 4.2,
                    },
                }}

            >
                {productTwo.map((carousel, i) => (
                    <SwiperSlide key={i}>
                        <Carousel id={carousel.id} img={carousel.img} name={carousel.name} price={carousel.price} discount={(carousel.price / carousel.discount).toFixed(2)} />
                    </SwiperSlide>
                ))}
            </Swiper>



        </div>
    );
}

export default Carrou;
