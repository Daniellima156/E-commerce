import React from 'react';
import styles from './Popular.module.css';




function Popular({ titulo, subTitulo }) {
    return (
        <div className={styles.containerMain}>
            <div className={styles.conjTitulo}>
                <p className={styles.titulo}>{titulo}</p>
                <p className={styles.subTitulo}>{subTitulo}</p>
                <hr className={styles.hrDivider}/>
            </div>
        </div>
    );
}

export default Popular;
