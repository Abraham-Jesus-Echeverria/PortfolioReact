
import RedesMenu from "./redesMenu"; 
import Button from "../../Button";
import "./Navbar.css"
import Link from "../../Link";
export default function Navbar({menuActive, MenuToggle}){  
  
    return(<> 
    <div className="MenuContainer"> 
    <div className="nameStyle">ABRAHAM<span>E</span></div>
        <nav className="Navbar"> 
            <ul className="listStyle">  
                <li><Link url={"#About"}>About</Link></li> 
                <li><Link url={"/Proyectos"}>Proyectos</Link></li> 
                <li><Link url={"/Contacto"}>Contacto</Link></li>
            </ul>
        </nav> 
    <div className="redes-container"> 
        <RedesMenu />  
        <Button styles="menuButton" handleButton={menuActive}>{MenuToggle?<i className="fa-sharp fa-solid fa-xmark"></i>:<i className="fa-solid fa-bars"></i> }</Button>
    </div>
    </div>
    </>)
}