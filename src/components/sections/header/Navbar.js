import React, {useState} from "react";   
import RedesMenu from "./redesMenu"; 
import Button from "../../Button";
import "./Navbar.css"

export default function Navbar({menuActive}){  
  
    return(<> 
    <div className="MenuContainer"> 
    <div className="nameStyle">ABRAHAM<span>E</span></div>
        <nav className="Navbar"> 
            <ul className="listStyle">  
                <li><a href="/about">About</a></li> 
                <li><a href="/proyects">Proyectos</a></li> 
                <li><a href="/contacto">Contacto</a></li> 
            </ul>
        </nav> 
    <div className="redes-container"> 
        <RedesMenu />  
        <Button styles="menuButton" handleButton={menuActive}><i class="fa-solid fa-bars"></i></Button>
    </div>
    </div>
    </>)
}