import React from 'react';
import styles from './Tittle.module.css';

function Tittle({ titulo, subTitulo }) {
    return (
        <div className={styles.containerMain}>
            <div className={styles.conjTitulo}>
                <p className={styles.titulo}>{titulo}</p>
                <p className={styles.subTitulo}>{subTitulo}</p>
                <hr/>
            </div>
        </div>
    );
}

export default Tittle;
