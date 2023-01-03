import React from "react"; 
import "./modalForm.css" 
import Button from "../../Button";

export default function ModalForm ({Modal, modalActive}) { 
    return(<> 
    <div className={`modalFormContainer ${Modal? "modalFormActive":""}`}> 
        <div className="formContainer"> 
            <h2>¡Contactame ya!</h2>
            <form action="">  
            <div> 
                <label htmlFor="Nombre"> Ingresa tu nombre</label> 
                <input type="text" id="Nombre" name="nombre" />
            </div> 
            <div> 
                <label htmlFor="Email"> Ingresa tu correo electronico</label> 
                <input type="text" id="Email" name="email" />
            </div> 
            <div> 
                <label htmlFor="TEL"> Ingresa tu numero telefonico</label> 
                <input type="text" id="TEL" name="telefono" />
            </div> 
            <div> 
                <Button handleButton={modalActive}> Cerrar </Button>
            </div>
            
            </form>
        </div>
    </div>
    </>)
}