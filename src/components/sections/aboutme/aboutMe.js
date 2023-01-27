import React from "react";  
import "./aboutMe.css" 
import Foto from "../../../assets/images/Fotografia.png" 
import Button from "../../Button";

export default function AboutMe() { 
    return (<> 
    
    <section className="SectionContainer">  
    <div className="backgroundAbout clipPath"> 
      <h2 className="titleAbout">¡Acerca de mi!</h2> 
      <div className="containerContentAbout"> 
        <div className="containerImageAbout">  
          <img src={Foto} alt="Fotografia" className="fotoAbout" />
        </div>
        <div className="containerTextAbout"> 
      <p className="textStyle">Soy una persona apasionada por la tecnología y la innovación, actualmente cuento con una ingeniera en mecatrónica orientada hacia el area de la automatización y cuento con conocimientos en diversos lenguajes de programación para dispositivos como microcontroladores, y lenguajes gráficos para PLC'S de tipo escalera o de compuertas lógicas de la misma manera tengo conocimientos sólidos en electrónica. </p> 
      <p className="textStyle">Estoy interesado en el desarrollo web, por lo cual he estado aprendiendo desarrollo <span>Front End</span> de forma autodidacta, actualmente cuento con conocimientos en HTML, CSS, Java Script, React.js, Boostrap5 y próximamente espero aprender a utilizar el framework Next.js y desarrollo backend, asi como un preprocesador de CSS como Sass</p>
      <div className="containerButtonAbout"> 
        <Button styles="buttonAbout buttonGlobal">Descarga mi CV</Button>   
        <div className="containerIconsAbout"> 
           <i className="fa-brands fa-html5"></i>
           <i className="fa-brands fa-css3-alt"></i>  
           <i className="fa-brands fa-react"></i>
           <i className="fa-brands fa-js"></i>
           <i className="fa-brands fa-git"></i>
           <i className="fa-brands fa-bootstrap"></i>
        </div>

      </div>
        </div>
      </div> 
      </div>
    </section> 
    
    </>); 
}