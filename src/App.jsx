import './App.css';
import Navbar from './components/Navbar/Navbar';
import Tittle from './components/Tittle/Tittle';
import Cards from './components/Cards/Cards';


import Home from './Pages/Home';
import Login from './Pages/Login';
import Cart from './Pages/Cart';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Cart' element={<Cart />}/>
          <Route path='/Login' element={<Login />}/>
          
        </Routes>
        
      </BrowserRouter>


    </div>
  );
}

export default App;
