import React from "react"  
import "./MenuHamburguesa.css"

export default function MenuHamburguesa ({Menu}) { 
    return ( 
        <>  
        <div className={` menuHamburgesa ${Menu?"menuHamburgesaActive" : ""}`}>  
        <h1> soy el menu hamburguesa XD </h1>
        </div>
        </>
    )
}