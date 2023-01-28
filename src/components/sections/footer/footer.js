import React from "react";  
import "./footer.css"
import Link from "../../Link"; 
import PersonalInformation from "../../personalInformation";

export default function Footer(){ 
    return(<> 
    <footer className="footerSection">
        <div className="containerContentFooter"> 
            <h2 className="titleFooter">vista mis redes</h2>
            <div className="linksFooterContainer"> 
                <Link linkStyle="linkStyleFooter" url={"./codePen"}><i class="fa-brands fa-codepen"></i></Link>
                <Link linkStyle="linkStyleFooter" url={"./GitHub"}><i class="fa-brands fa-github"></i></Link> 
                <Link linkStyle="linkStyleFooter" url={"./Linkedin"}><i class="fa-brands fa-linkedin"></i></Link>  
            </div>
              <PersonalInformation  stylesContainer="containerFooterContact" />
        </div>
    </footer>
    
    </>)
}