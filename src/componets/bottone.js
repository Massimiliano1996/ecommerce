import React,{useState} from 'react';
import './bottone.css'

const Bottone=function(){
const[count,setCount]=useState(0);



return(
    <div>
<button className='up' onClick={()=>setCount(count+1)}>Aggiungi articolo</button>
<p>{count}</p>
<button className='down' onClick={()=>setCount(count-1)}>Rimuovi articolo</button>

</div>
)


}
export default Bottone;