import React from "react"; 
import "./contacto.css"
import Formulario from "../../Formulario";

export default function Contacto() { 
    return(
        <>  
        <section className="sectionContacto"> 
          <div className="clipPath backgroundContacto"> 
          <h2 className="titleContact"> Contactame </h2>
            <div className="containerContactFormulario">  
            <Formulario styleInputContainer="styleInputContainer InputContainerMargin" styleInput="styleInput inputContactStyle" styleLabel="styleLabel" styleTextArea="styleTextArea InputContactStyle"/> 
            <div className="redesMenuForm"> 
            redes
            </div>
            </div>
          </div>
        </section>
        </>
    )
}