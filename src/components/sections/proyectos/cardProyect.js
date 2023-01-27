import React from "react"; 

export default function CardProyect({stylesCard, activeProyect, handleMouseOver, handleMouseOut, id}){  
  return(
        <>  
        <div className={stylesCard} onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut} id={id}> 
          <div className={`presentationProyect ${activeProyect ? "presentationProyectActive" : ""}`}>
          </div>
        </div> 
        </>
    )
}