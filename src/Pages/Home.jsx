import React from 'react'
import Tittle from '../components/Tittle/Tittle'
import Releases from '../components/Releases/Releases';
import Banner from '../components/Banner/Banner';
import Popular from '../components/Popular/Popular';
import BannerTwo from '../components/Banner/BannerTwo';
import Information from '../components/Information/Information';
import Carousel from '../components/Carousel/Carousel';
import CartShop from '../components/CartShop/CartShop';
import Bag from '../components/CartShop/Bag';
import Cards from '../components/Cards/Cards';

function Home(){ 
  return (
    <div>
      <Tittle titulo='Lançamentos' subTitulo='Brilhe com Elegância: Descubra nossas últimas novidades!'/>
      <Releases/>
      <Banner/>
      <Popular titulo='Populares' subTitulo='Descubra o Preferido de Todos: Renove seu Estilo!'/>
      <Carousel/>
      <Popular titulo='Nova Coleçâo' subTitulo='Confira a Nova Coleçâo de Junho!'/>
      <BannerTwo/>
      <Information/>
      <Bag/>
     
      
    </div>  
  )
};

export default Home;
