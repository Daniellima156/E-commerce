import React from 'react'
import Tittle from '../components/Tittle/Tittle'
import Releases from '../components/Releases/Releases';
import Banner from '../components/Banner/Banner';

function Home(){ 
  return (
    <div>
      <Tittle titulo='Lançamentos' subTitulo='Brilhe com Elegância: Descubra nossas últimas novidades!'/>
      <Releases/>
      <Banner/>
    </div>  
  )
};

export default Home;
