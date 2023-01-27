import React, { useState } from "react"; 
import "./proyectos.css" 
import CardProyect from "./cardProyect";


export default function ProyectosSection() {  
  const [activeProyect, setActiveProyect] = useState([false, false, false, false, false]); 
 
  const ActiveProyect = (e) =>{  
    for(let index in activeProyect){  
      if(e.target.id === index){ 
        let NewArray = [...activeProyect]; 
        NewArray[index] = true; 
        setActiveProyect(()=>NewArray); 
      }
    }   
  }  
  const disabledActiveProyect = (e) =>{ 
    setActiveProyect(()=>[false, false, false, false, false])  
  }
  console.log(activeProyect);
    return (<>
    <section className="proyectosSectionStyles"> 
      <div className="clipPath backgroundProyects"> 
      <h2 className="titleProyectos">Proyectos</h2>
        <div className="proyectosGrid"> 

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