import React,{useState} from "react";  
import Navbar from "./Navbar";
import Jumbotrom from "./jumbotron"; 
import ModalForm from "./modalFormulario"; 

export default function Header(){  
    const [Modal, setModal] = useState(false);  
    const modalActive = (e) =>{  
        e.preventDefault(); 
        setModal(!Modal); 
    }
    return(<> 
    <header>   
        <ModalForm Modal={Modal} modalActive={modalActive}/>
        <Navbar /> 
        <Jumbotrom modalActive={modalActive} /> 
        
    </header>
    </>)
}