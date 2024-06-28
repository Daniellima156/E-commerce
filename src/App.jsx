import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer"
import Home from './Pages/Home';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import Provider from './context/Provider';



import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
        <Footer />

      </BrowserRouter>
    </Provider>



  );
}

export default App;
