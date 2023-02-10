import React from "react"; 
import "./contacto.css"
import Formulario from "../../Formulario"; 
import PersonalInformation from "../../PersonalInformation"; 
import AeLogo from "../../../assets/images/AE-LOGO-NONEBACKGROUND.png"

export default function Contacto() { 
    return(
        <>  
        <section className="sectionContacto"> 
          <div className="clipPath backgroundContacto"> 
          <h2 className="titleContact"> Contactame </h2>
            <div className="containerContactFormulario">  
              <Formulario styleInputContainer="styleInputContainer InputContainerMargin" styleInput="styleInput inputContactStyle" styleLabel="styleLabel" styleTextArea="styleTextArea InputContactStyle"/> 
                <div className="redesMenuForm"> 
                  <h2 className="titleInformation">Mas informacion</h2>
                  <PersonalInformation stylesContainer="containerInformation" stylesItems="stylesItems" /> 
                  <div className="imageContainerContacto">
                    <img src={AeLogo} alt="Logotipo" className="imageContacto" />
                  </div>
                </div> 
            </div>
          </div>
        </section>
        </>
    )
}