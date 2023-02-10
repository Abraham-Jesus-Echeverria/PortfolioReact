import React from "react"; 
import "./ModalForm.css" 
import Button from "./Button"; 
import Formulario from "./Formulario";

export default function ModalForm ({Modal, modalActive}) { 
    return(<> 
    <div className={`modalFormContainer ${Modal? "modalFormActive":""}`}> 
        <div className="ModalContentContainer"> 
        <div className="headerModal"> 
            <div className="titleModal">  
                <h2>¡Contactame ya!</h2> 
            </div> 
            <div className="containerButtonClose"> 
                <Button handleButton={modalActive} styles="stylesCloseButtom"> <i className="fa-solid fa-xmark"></i> </Button>  
            </div>
        </div>
        <div className="formContainer">
            <div> 
                <Formulario styleInputContainer="styleInputContainer" styleInput="styleInput" styleLabel="styleLabel" styleTextArea="styleTextArea StyleInput"/>
            </div> 
        </div>
        </div>
    </div>
    </>)
}