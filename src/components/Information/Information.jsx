import React from 'react'
import styles from "./Information.module.css"
import { MdSecurity } from "react-icons/md";
import { FaCreditCard } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";


function Information() {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.containerTwo}>
                    <div className={styles.icone}><MdSecurity /></div>
                    <h4 className= {styles.title}>Segurança</h4>
                    <p className={styles.textInformation}>Garantia de segurança e confiança nas suas compras</p>
                </div>
                <div className={styles.containerTwo}>
                    <div className={styles.icone}><FaCreditCard/></div>
                    <h4 className= {styles.title}>Parcelamento</h4>
                    <p className={styles.textInformation}>Divida suas compras em até 10 parcelas, sem cobrança de juros no cartão.</p>
                </div>
                <div className={styles.containerTwo}>
                    <div className={styles.icone}><TbTruckDelivery /></div>
                    <h4 className= {styles.title}>Entrega</h4>
                    <p className={styles.textInformation}>Aproveite o frete grátis e a entrega rápida em nosso site.</p>
                </div>
            </div>
        </div>
    )
}

export default Information
