import React from "react";   
// import Link from "../../Link"; 
import IconsRedes from "../../IconsRedes";
const estilosContainer = {  
    width: "100px", 
    height: "250px", 
    backgroundColor: "var(--color-redes)",
    marginTop: "10px", 
    display: "flex", 
    justifyContent: "center",  
} 

const etiqueta = {  
    width: "30px",  
    height: "100px", 
    backgroundColor: "var(--color-secundario)",   
    position: "absolute",  
    top: "200px", 
    left: "35px",  
    writingMode: "vertical-lr", 
    fontWeight: "bold", 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    border: "1px solid", 

}
const iconsContainer = {
    display: "flex", 
    flexDirection: "column", 
    gap: "20px", 
    fontSize: "1.6rem", 
    color: "#fff", 
    marginTop: "40px", 
}
export default function RedesMenu ({iconStyleHover}) {  
    return(<> 
    <div className="redesMenu" style={estilosContainer}> 
    <IconsRedes  iconsContainer={iconsContainer} iconStyleHover={iconStyleHover} linkStyle="LinkStyleRedes"/>  
        <div style={etiqueta}>Follow me</div>
    </div>
    </>)
}