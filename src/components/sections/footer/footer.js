import React from "react";  
import "./footer.css"
import PersonalInformation from "../../PersonalInformation";
import IconsRedes from "../../IconsRedes";

export default function Footer(){ 
    return(<> 
    <footer className="footerSection">
        <div className="containerContentFooter"> 
            <h2 className="titleFooter">vista mis redes</h2> 
            <IconsRedes classStyleIconsContainer="linksFooterContainer" linkStyle="linkStyleFooter"/>
              <PersonalInformation  stylesContainer="containerFooterContact"/>
        </div>
    </footer>
    
    </>)
}