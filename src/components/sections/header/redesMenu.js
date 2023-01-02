import React from "react";  
const estilosContainer = {  
    postion: "absolute", 
    width: "100px", 
    height: "250px", 
    backgroundColor: "#1D1A47",
    marginTop: "10px", 
    display: "flex", 
    justifyContent: "center",  
} 

const etiqueta = {  
    width: "30px",  
    height: "100px", 
    backgroundColor: "#FF7F27",   
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
const linksStyles = { 
    textDecoration: "none", 
    color: "#fff",
}
export default function RedesMenu () {  
    return(<> 
    <div className="redesMenu" style={estilosContainer}> 
    <div style={iconsContainer}>  
       <a href="#/github" style={linksStyles}><i className="fa-brands fa-github"></i></a> 
       <a href="#/linkedin" style={linksStyles}><i className="fa-brands fa-linkedin"></i></a>
       <a href="#/codepen" style={linksStyles}><i className="fa-brands fa-codepen"></i></a> 
    </div>
        <div style={etiqueta}>Follow me</div>
    </div>
    </>)
}