import React from 'react';
import styles from './Carousel.module.css';
import productTwo from '../assets/data1';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

function Carousel() {
  return (
    <div className={styles.containerMain}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={4}
        pagination={false}
        spaceBetween={10}
        loop={true}
        navigation={{
          nextEl: ".buttonNext",
          prevEl: ".buttonPrev",
        }}
        breakpoints={{
          1200: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 2,
          },
          576: {
            slidesPerView: 1,
          },
        }}
      >
        {productTwo.map((product, i) => (
          <SwiperSlide key={i}>
            <div className={styles.containerCarrousel}>
              <div className={styles.containerUp}>
                <img src={product.img} alt={product.name} />
              </div>
              <div className={styles.containerDown}>
                <p className={styles.containerName}>{product.name}</p>
                <h2 className={styles.containerPrice}>R$ {product.price}</h2>
                <p className={styles.containerDiscount}>
                  <span className={styles.fontsize}>3X</span> de <span className={styles.fontsize}>{(product.price/product.discount).toFixed(2)}</span> sem <span className={styles.fontsize}>juros</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <FaArrowAltCircleRight className={`${styles.buttonNext} buttonNext`} />
        <FaArrowAltCircleLeft className={`${styles.buttonPrev} buttonPrev`} />
      </Swiper>
    </div>
  );
}

export default Carousel;
