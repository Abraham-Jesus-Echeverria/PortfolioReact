import React from "react";  
import "./jumbotron.css"  
import Computadora from"../../../assets/images/computadora1.jpg"

export default function Jumbotrom() { 
    return(<> 
    <div className="jumbotronContainer">  
      <div className="imageContainer">
        <img src={Computadora} alt="imagen computadora1" className="imageStyle" />
      </div>
      <div className="textContainer"> 
        <h1 className="titleStyle">¡Hola! me llamo Abraham Echeverria y soy web developer </h1>
      </div>
    </div>
    
    </>); 
}