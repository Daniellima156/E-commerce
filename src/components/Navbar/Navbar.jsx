import styles from './Navbar.module.css';
import React from 'react';
import { IoMdSearch } from "react-icons/io";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { IoIosMenu } from "react-icons/io";
import { CiCircleChevRight } from "react-icons/ci";

import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from 'react';

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);


  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <div className={styles.containerHeader}>
        <div className={styles.searchIcon}>
          <Link><IoMdSearch /></Link>
          <input placeholder="Pesquise o que procura... " className={styles.inputsearch}></input>
        </div>
        <a className={styles.menuIcon}><IoIosMenu onClick={toggleVisibility} /></a>
        <div className={styles.dropdown} >
          <IoClose className={styles.closeIcon} />
          <ul className={styles.dropdownList}>
            <li className={styles.dropdownNameA}>Acessórios <CiCircleChevRight className={styles.rightIcon} /></li>
            <li className={styles.dropdownName}>Alianças <CiCircleChevRight className={styles.rightIcon} /></li>
            <li className={styles.dropdownName}>Anéis <CiCircleChevRight className={styles.rightIcon} /></li>
            <li className={styles.dropdownName}>Brincos <CiCircleChevRight className={styles.rightIcon} /></li>
            <li className={styles.dropdownName}>Berloques <CiCircleChevRight className={styles.rightIcon} /></li>
            <li className={styles.dropdownName}>Correntes <CiCircleChevRight className={styles.rightIcon} /></li>
            <li className={styles.dropdownName}>Pulseiras <CiCircleChevRight className={styles.rightIcon} /></li>
            <li className={styles.dropdownName}>Pingentes <CiCircleChevRight className={styles.rightIcon} /></li>
            <li className={styles.dropdownName}>Relogios <CiCircleChevRight className={styles.rightIcon} /></li>
          </ul>
          <li ><span className={styles.buttonLogin}>Logar</span></li>
        </div>
        <h1 className={styles.nomeLoja}><Link to='/'>Aurora Brilhante</Link></h1>
        <div>
          <ul className={styles.listIcon}>
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
