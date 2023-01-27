import React, { useState } from "react"; 
import "./proyectos.css" 
import CardProyect from "./cardProyect";


export default function ProyectosSection() {  
  // se crea un estado en el cual cada false equivale a una card,
  const [activeProyect, setActiveProyect] = useState([false, false, false, false, false]); 
//  funcion para dar la transicion a cada card segun su id y la posicion a la cual equivale su correspondiente valor boleeano en el estado
  const ActiveProyect = (e) =>{  
    for(let index in activeProyect){  
      if(e.target.id === index){ 
        let NewArray = [...activeProyect]; 
        NewArray[index] = true; 
        setActiveProyect(()=>NewArray); 
      }
    }   
  }  
// reiniciamos los valores del estado en falsa para remover la transicion
  const disabledActiveProyect = (e) =>{ 
    setActiveProyect(()=>[false, false, false, false, false])  
  }
    return (<>
    <section className="proyectosSectionStyles"> 
      <div className="clipPath backgroundProyects"> 
      <h2 className="titleProyectos">Proyectos</h2>
        <div className="proyectosGrid"> 
        {/* le enviamos como prop el valor del indice del estado al cual corresponde cada card por ejemplo la primera card equivale a la posicion 0  */}
        <CardProyect stylesCard="proyecto1 proyecto" handleMouseOver={ActiveProyect} handleMouseOut={disabledActiveProyect} activeProyect={activeProyect[0]} id="0" /> 
        <CardProyect stylesCard="proyecto2 proyecto" handleMouseOver={ActiveProyect} handleMouseOut={disabledActiveProyect} activeProyect={activeProyect[1]} id="1" />
        <CardProyect stylesCard="proyecto3 proyecto" handleMouseOver={ActiveProyect} handleMouseOut={disabledActiveProyect} activeProyect={activeProyect[2]} id="2" />
        <CardProyect stylesCard="proyecto4 proyecto" handleMouseOver={ActiveProyect} handleMouseOut={disabledActiveProyect} activeProyect={activeProyect[3]} id="3" />
        <CardProyect stylesCard="proyecto5 proyecto" handleMouseOver={ActiveProyect} handleMouseOut={disabledActiveProyect} activeProyect={activeProyect[4]} id="4" />  

        </div>
      </div>
    </section>
    </>); 
}