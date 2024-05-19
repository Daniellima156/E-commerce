import styles from './Navbar.module.css';
import React from 'react';
import { IoMdSearch } from "react-icons/io";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";
function Navbar() {

  return (
    <div>
      <div className={styles.containerHeader}>
        <div className={styles.searchIcon}>
          <Link><IoMdSearch /></Link>
          <input placeholder="Pesquise o que procura... " className={styles.inputsearch}></input>
          </div>
        <h1 className={styles.nomeLoja}><Link to='/'>Aurora Brilhante</Link></h1>
        <div>
          <ul className={styles.listaIcon}>
            <li className={styles.iconHeader}><Link to='Login'><FaRegUser /></Link></li>
            <li className={styles.iconHeader}><FaRegHeart /></li>
            <li className={styles.iconHeader}><Link to='/Cart'><FiShoppingBag /></Link></li>
          </ul>
        </div>
      </div>
      <div className={styles.secondNavbar}>
            <ul className={styles.secondHeader}>
                <li className={styles.secondHeaderLink}><Link>Acessórios</Link></li>
                <li className={styles.secondHeaderLink}><Link>Alianças</Link></li>
                <li className={styles.secondHeaderLink}><Link>Anéis</Link></li>
                <li className={styles.secondHeaderLink}><Link>Brincos</Link></li>
                <li className={styles.secondHeaderLink}><Link>Berloques</Link></li>
                <li className={styles.secondHeaderLink}><Link>Correntes</Link></li>
                <li className={styles.secondHeaderLink}><Link>Pulseiras</Link></li>
                <li className={styles.secondHeaderLink}><Link>Pingentes</Link></li>
                <li className={styles.secondHeaderLink}><Link>Relogios</Link></li>
            </ul>
        </div>
    </div>

  );
}

export default Navbar;
