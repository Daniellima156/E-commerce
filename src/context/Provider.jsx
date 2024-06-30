import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {
    const [isMenuVisibleCart, setIsMenuVisibleCart] = useState(false);
    const [carrinho, setCarrinho] = useState([]);

    const value = {     
        carrinho,
        setCarrinho,
        isMenuVisibleCart,
        setIsMenuVisibleCart,
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

Provider.propTypes = {
    children: PropTypes.isRequired,
};

export default Provider;
