import React,{useState} from "react";  
import Navbar from "./Navbar";
import Jumbotrom from "./jumbotron"; 
import ModalForm from "../../modalFormulario";  
import MenuHamburguesa from "../../MenuHamburguesa";

export default function Header(){  
    const [Modal, setModal] = useState(false);  
    const [Menu, setMenu] = useState(false); 
    const modalActive = (e) =>{  
        e.preventDefault(); 
        setModal(!Modal); 
    } 
    const menuActive = (e) =>{ 
        setMenu(!Menu); 
    }
    return(<> 
    <header>   
        <ModalForm Modal={Modal} modalActive={modalActive}/>
        <Navbar menuActive={menuActive} MenuToggle={Menu}/>  
        <MenuHamburguesa Menu={Menu}/>
        <Jumbotrom modalActive={modalActive}/> 
        
    </header>
    </>)
}