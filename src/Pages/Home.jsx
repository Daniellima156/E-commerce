import React from 'react'
import Tittle from '../components/Tittle/Tittle'
import Releases from '../components/Releases/Releases';
import Banner from '../components/Banner/Banner';
import Popular from '../components/Popular/Popular';
import Carrou from '../components/Carrou/Carrou';
import BannerTwo from '../components/Banner/BannerTwo';

function Home(){ 
  return (
    <div>
      <Tittle titulo='Lançamentos' subTitulo='Brilhe com Elegância: Descubra nossas últimas novidades!'/>
      <Releases/>
      <Banner/>
      <Popular titulo='Populares' subTitulo='Descubra o Preferido de Todos: Renove seu Estilo!'/>
      <Carrou/>
      <Popular titulo='Nova Coleçâo' subTitulo='Confira a Nova Coleçâo de Junho!'/>
      <BannerTwo/>
      
      
    </div>  
  )
};

export default Home;
