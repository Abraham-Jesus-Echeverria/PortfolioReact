import React from "react";  
import "./aboutMe.css" 
import Foto from "../../../assets/images/Fotografia.png" 
import Button from "../../Button";

export default function AboutMe() { 
    return (<> 
    
    <section className="SectionContainer" id="About">  
    <div className="backgroundAbout clipPath"> 
      <h2 className="titleAbout">¡Acerca de mi!</h2> 
      <div className="containerContentAbout"> 
        <div className="containerImageAbout">  
          <img src={Foto} alt="Fotografia" className="fotoAbout" />
        </div>
        <div className="containerTextAbout"> 
      <div>
        <p className="textStyle textStyleBold textStyle1_3rem"> !Ingeniero Mecatronico / Web developer jr!</p>  
        <p className="textStyle">Gusto por la inovacion y la tecnologia, he decidido dar un giro a mi carrera aprendiendo las ultimas tecnologias del desarrollo front end</p>  
        <div className="badgeContainer"> 
          <div className="badge">Electronica</div> 
          <div className="badge">Microcontroladores</div> 
          <div className="badge">PLC</div>
          <div className="badge">Automatizacion</div> 
          <div className="badge">Desarrollo web </div>
        </div>
      </div>
      <div className="containerConocimientosAbout">   
        <p className="textStyle textStyleBold"> Conocimientos en: </p>
        <div className="containerIconsAbout"> 
           <i className="fa-brands fa-html5 iconAboutHover htmlColor"></i>
           <i className="fa-brands fa-css3-alt iconAboutHover cssColor"></i>  
           <i className="fa-brands fa-react iconAboutHover reactColor"></i>
           <i className="fa-brands fa-js iconAboutHover jsColor"></i>
           <i className="fa-brands fa-git iconAboutHover gitColor"></i>
           <i className="fa-brands fa-bootstrap iconAboutHover boostrapColor"></i>
        </div>  
      </div> 
      <Button styles="buttonAbout buttonGlobal">Descarga mi CV</Button>
        </div>
      </div> 
      </div>
    </section> 
    
    </>); 
}