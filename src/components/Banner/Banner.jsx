import React from 'react'
import styles from "./Banner.module.css"
import BannerHome from "../../img/BannerHomeRight.png"
import BannerHomeLeft from "../../img/BannerHomeLeft.png"
import { RiShining2Fill } from "react-icons/ri";



function Banner() {

  const iconsArray = Array.from({ length: 3 });

  return (
    <div className={styles.containerBanner1}>
      <div className={styles.containerBanner}>
        <img src={BannerHome} className={styles.bannerHomeRight} />
        <div>
          {iconsArray.map((_, index) => (
            <RiShining2Fill key={index} src={<RiShining2Fill />} />
          ))}
        </div>
        <h1 className={styles.textBanner}><span className={styles.brilhe}>Adorne-Se,</span><span className={styles.com}>Com a <span className={styles.verdadeira}>Verdadeira</span></span> <span className={styles.essencia}>Essência <span className={styles.elegancia}>Da Elegância.</span></span></h1>
        <div>
          {iconsArray.map((_, index) => (
            <RiShining2Fill key={index} src={<RiShining2Fill />} />
          ))}
        </div>
        <img src={BannerHomeLeft} className={styles.bannerHomeLeft} />
      </div>

    </div>
  )
}

export default Banner
