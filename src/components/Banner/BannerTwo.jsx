import React from 'react'
import styles from "./BannerTwo.module.css"
import BannerTwoHome from "../../img/BannerTwo1.png"
import mosaicoOne from "../../img/mosaicoOne.jpg"
import mosaicoTwo from "../../img/mosaicoTwo.webp"
import mosaicoThree from "../../img/mosaicoThree.webp"
import { Link } from "react-router-dom"

function BannerTwo() {

    return (
        <div className={styles.containerBannerTwo}>
            <img src={BannerTwoHome} />
            <div className={styles.tittleText}>
                <h1 className={styles.titleOne}>Aurora Vibrante Brilhante </h1>
                <div className={styles.blocos}>
                    <div className={styles.bloco}><Link><img className={styles.imgMosaico} src={mosaicoOne} /><p>Confira</p></Link></div>
                    <div className={styles.bloco}><Link><img className={styles.imgMosaico} src={mosaicoTwo} /><p>Confira</p></Link></div>
                    <div className={styles.bloco}><Link><img className={styles.imgMosaico} src={mosaicoThree} /><p>Confira</p></Link></div>

                </div>
            </div>

        </div>
    )
}

export default BannerTwo;
