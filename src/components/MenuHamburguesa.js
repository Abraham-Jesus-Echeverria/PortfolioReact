import React from "react";
import "./MenuHamburguesa.css";
import Link from "./Link";  
import logo from "../assets/images/AE-LOGO-NONEBACKGROUND.png";
import IconsRedes from "./IconsRedes";

export default function MenuHamburguesa({ Menu }) {
  return (
    <>
      <div className={` menuHamburgesa ${Menu ? "menuHamburgesaActive" : ""}`}> 
       <h2 className="titleMenu">Menu</h2>
        <div className="itemsContainer">
          <div className="menuItemContainer"> 
          <Link url="#About" linkStyle="LinkStyle">About <i className="fa-solid fa-user"></i> </Link> 
          </div> 

          <div className="menuItemContainer"> 
          <Link url="#Proyectos" linkStyle="LinkStyle">Proyectos <i className="fa-solid fa-briefcase"></i> </Link> 
          </div> 

          <div className="menuItemContainer"> 
          <Link url="#Contacto" linkStyle="LinkStyle">Contacto <i className="fa-solid fa-envelope"></i> </Link> 
          </div> 
          <div className="containerLogoMenu">  
            <img src={logo} alt="logo" className="logoHamburguesa" />
          </div>
          <div className="redesMenuHamburguesa"> 
            <h2> ¡Follow me! </h2> 
            <IconsRedes classStyleIconsContainer="containerIconsHamburguesa" linkStyle="LinkStyleRedes"/>
          </div>
        </div>
      </div>
    </>
  );
}
