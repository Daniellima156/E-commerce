import React from 'react'
import styles from "./Footer.module.css"

import { FaFacebook, FaPinterest, FaYoutube, FaWhatsapp, FaInstagram } from "react-icons/fa";



function Footer() {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.containerLeft}>
                    <h3 className={styles.tittleLeft}>Nossas Redes Sociais:</h3>
                    <ul className={styles.containerIcones}>
                        <li className={styles.icone}><FaFacebook /></li>
                        <li className={styles.icone}><FaInstagram /></li>
                        <li className={styles.icone}><FaPinterest /></li>
                        <li className={styles.icone}><FaWhatsapp /></li>
                        <li className={styles.icone}><FaYoutube /></li>
                        
                    </ul>
                </div >
                <div className={styles.containerRight}>
                    <h3 className={styles.tittleRight}>Ganhe Desconto de 5%:</h3>
                    <div className={styles.cadastro}>
                        <input className={styles.inputFormat} type="text" placeholder='Insira Seu Email...'></input>
                        <button className={styles.btn}>Inscreva-se</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;