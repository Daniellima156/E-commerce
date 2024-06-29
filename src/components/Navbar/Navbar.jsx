import styles from './Navbar.module.css';
import React, { useState, useContext } from 'react';
import { IoMdSearch } from "react-icons/io";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { IoIosMenu } from "react-icons/io";
import { CiCircleChevRight } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSpring, animated } from '@react-spring/web';
import AppContext from '../../context/AppContext';

function Navbar() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const { setIsMenuVisibleCart, isMenuVisibleCart } = useContext(AppContext);

  const toggleMenuVisibility = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const toggleMenuVisibilityCart = () => {
    setIsMenuVisibleCart(!isMenuVisibleCart)
  }

  const slideInStyle = useSpring({
    transform: isMenuVisible ? 'translateX(0%)' : 'translateX(-100%)',
    opacity: isMenuVisible ? 1 : 0,
    config: { duration: 250 },
  });

  return (
    <div>
      <div className={styles.containerHeader}>
        <div onClick={toggleMenuVisibility} className={`${styles.blackground} ${isMenuVisible ? styles.visible : styles.hidden}`}></div>
        <div className={styles.searchIcon}>
          <Link><IoMdSearch /></Link>
          <input placeholder="Pesquise o que procura..." className={styles.inputsearch}></input>
        </div>
        <a className={styles.menuIcon} onClick={toggleMenuVisibility}>
          <IoIosMenu />
        </a>
        <h1 className={styles.nomeLoja}><Link to='/'>Aurora Brilhante</Link></h1>
        <div>
          <ul className={styles.listIcon}>
            <li className={styles.iconHeader}><Link to='Login'><FaRegUser /></Link></li>
            <li className={styles.iconHeader}><FaRegHeart /></li>
            <li className={styles.iconHeader}><FiShoppingBag onClick={toggleMenuVisibilityCart} /></li>
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
        <div className={styles.secondHeaderContainerSearch}>
          <div className={styles.secondHeaderSearchIcon}><Link><IoMdSearch /></Link></div>
          <input placeholder="Pesquise Brincos, Acessorios, Pulseiras" className={styles.secondHeaderSearch}></input>
        </div>
      </div>
      <animated.div style={slideInStyle} className={styles.dropdown}>
        <IoClose className={styles.closeIcon} onClick={toggleMenuVisibility} />
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
        <li><span className={styles.buttonLogin}>Logar</span></li>
      </animated.div>
    </div>
  );
}

export default Navbar;
