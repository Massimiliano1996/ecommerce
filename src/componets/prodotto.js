import React from 'react'
import Bottone from './bottone';
import chitarra from './img/Fender.jpg'; 
import './prodotto.css';



const Prodotto=function(){

  const ingrandisciImmagine=function(e){
    
  }

    





    return (
    <div className="card">
    <img className='product-img' src={chitarra} onMouseEnter={ingrandisciImmagine}></img>
    <div className="card-body">
      <h4 className="card-title">Fender Stratocaster</h4>
      <p className="card-text">La chitarra elettrica Fender Stratocaster è senza ombra di dubbio una leggenda nel mondo della musica moderna. Realizzata da Leo Fender nel 1954, è immediatamente diventata un'icona per tutti i musicisti tanto che continua ad essere sempre popolarissima. Il design innovativo voluto da Fender per la sua creatura, è stato ed è fonte di ispirazione per una miriade di modelli che, tuttavia, non sono quasi mai riusciti ad eguagliarne la bellezza delle linee e il successo di pubblico.</p>    
      <Bottone/>
    </div>
    
  </div>
  )
}


export default Prodotto;