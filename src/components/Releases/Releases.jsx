import React from 'react'
import styles from './Releases.module.css'
import productOne from '../assets/data'
import Cards from '../Cards/Cards'

function Releases(){
  return (
    <div>
        <div className={styles.containerReleases}>{productOne.map((cards,i)=>{
            return <Cards key={i} id={cards.id} img={cards.img} name={cards.name} price={cards.price}/>
        })}</div>
      
    </div>
  )
}

export default Releases;
