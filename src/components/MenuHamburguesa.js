import React from "react";
import "./MenuHamburguesa.css";
import Link from "./Link";  
import logo from "../assets/images/AE-LOGO-NONEBACKGROUND.png";

export default function MenuHamburguesa({ Menu }) {
  return (
    <>
      <div className={` menuHamburgesa ${Menu ? "menuHamburgesaActive" : ""}`}> 
       <h2 className="titleMenu">Menu</h2>
        <div className="itemsContainer">
          <div className="menuItemContainer"> 
          <Link url="#About" linkStyle="LinkStyle">About <i class="fa-solid fa-user"></i> </Link> 
          </div> 

          <div className="menuItemContainer"> 
          <Link url="#Proyectos" linkStyle="LinkStyle">Proyectos <i class="fa-solid fa-briefcase"></i> </Link> 
          </div> 

          <div className="menuItemContainer"> 
          <Link url="#Contacto" linkStyle="LinkStyle">Contacto <i class="fa-solid fa-envelope"></i> </Link> 
          </div> 
          <div className="containerLogoMenu">  
            <img src={logo} alt="logo" className="logoHamburguesa" />
          </div>
          <div className="redesMenuHamburguesa"> 
            <h2> ¡Follow me! </h2>
            <div className="containerIconsHamburguesa"> 
              <Link url="/gitHub" linkStyle="LinkStyleRedes"><i class="fa-brands fa-github"></i></Link> 
              <Link url="/codePen" linkStyle="LinkStyleRedes"><i class="fa-brands fa-codepen"></i></Link>
              <Link url="/Linkedin" linkStyle="LinkStyleRedes"><i class="fa-brands fa-linkedin"></i></Link> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
