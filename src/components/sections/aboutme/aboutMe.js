import React from "react";  
import "./aboutMe.css" 
import Foto from "../../../assets/images/Fotografia.png"

export default function AboutMe() { 
    return (<>  
    <section className="SectionContainer"> 
      <h2 className="titleAbout">¡Acerca de mi!</h2> 
      <div className="containerContentAbout"> 
        <div className="containerImageAbout">  
          <img src={Foto} alt="Fotografia" className="fotoAbout" />
        </div>
        <div className="containerTextAbout"> 
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum similique consequatur neque asperiores beatae! Quis maiores, odit cum non eum nesciunt optio quas tempore fugiat, nemo, magnam eius provident doloribus?
        </div>
      </div>
    </section>
    </>); 
}