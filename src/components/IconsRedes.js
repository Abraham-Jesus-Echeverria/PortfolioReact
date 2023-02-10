import React from "react";  
import Link from "./Link";

export default function IconsRedes({iconsContainer, iconStyleHover, classStyleIconsContainer, linkStyle}){ 
    return(
        <>  
            <div style={iconsContainer} className={classStyleIconsContainer}>  
              <Link url="https://github.com/Abraham-Jesus-Echeverria" linkStyle={linkStyle} target="_blank"><i className={`fa-brands fa-github ${iconStyleHover}`}></i></Link>
              <Link url="https://www.linkedin.com/in/abraham-jes%C3%BAs-echeverria-ruiz-92579b216/" linkStyle={linkStyle} target="_blank"><i className={`fa-brands fa-linkedin ${iconStyleHover}`}></i></Link> 
              <Link url="https://codepen.io/AbrahamXD" linkStyle={linkStyle} target="_blank"><i className={`fa-brands fa-codepen ${iconStyleHover}`}></i></Link>
            </div>
        </>
    )
}