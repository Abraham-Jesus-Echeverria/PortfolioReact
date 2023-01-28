import React from "react"; 
import Link from "../../Link";

export default function CardProyect({stylesCard, activeProyect, handleMouseOver, handleMouseOut, id, UrlProyect}){  
  return(
        <>  
        <div className={`${stylesCard} ${activeProyect? "proyectoActive": ""}`} onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut} id={id}> 
          <Link url={UrlProyect} linkStyle={`presentationProyect ${activeProyect ? "presentationProyectActive" : ""}`}> 
          </Link>
        </div> 
        </>
    )
}