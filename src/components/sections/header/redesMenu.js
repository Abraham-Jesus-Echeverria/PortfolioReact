import React from "react";  
const estilosContainer = {  
    postion: "absolute", 
    width: "100px", 
    height: "250px", 
    backgroundColor: "#1D1A47",
    marginTop: "10px",
} 

const etiqueta = {  
    width: "30px",  
    height: "100px", 
    backgroundColor: "#FF7F27",   
    position: "absolute",  
    top: "200px", 
    left: "35px", 
    // right: "auto" 
}
export default function RedesMenu () {  
    return(<> 
    <div className="redesMenu" style={estilosContainer}> 
        <div style={etiqueta}> </div>
    
    </div>
    </>)
}