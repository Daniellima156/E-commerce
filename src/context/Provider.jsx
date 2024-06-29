import React, {useState} from "react";
import propTypes from "prop-types"
import AppContext from "./AppContext";

function Provider({ children }) {
    const [isMenuVisibleCart, setIsMenuVisibleCart] = useState(false);
    const [carrinho, setCarrinho] = useState([]);
    const value = {     
        carrinho,
        setCarrinho,
        isMenuVisibleCart,
        setIsMenuVisibleCart,
    }
    return (
        <AppContext.Provider value = {value}>
            {children}

        </AppContext.Provider>

    );
}

export default Provider;

Provider.propTypes - {
    children: propTypes.any
}.isRequired;