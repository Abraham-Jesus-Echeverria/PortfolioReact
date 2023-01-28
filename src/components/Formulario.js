import React, { useRef } from "react";
import Button from "./Button";
import { useValidateForm } from "./hooks/validateForm";

const errorStyles = { 
  color: "red", 
  marginBottom: "6px"
}
export default function Formulario({styleInputContainer,styleLabel,styleInput,styleTextArea}) { 
  let textForm = useRef();  
  let ButtonForm = useRef(); 

  let initialState = {
    name: "",
    email: "",
    telefono: "",
    comentarios: "",
  };

 
  const { Inputs, error, handleChange, handleSubmit, handleBlur } = useValidateForm(initialState, textForm, ButtonForm);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styleInputContainer}>
          <label htmlFor="Nombre" className={styleLabel}>
            Ingresa tu nombre
          </label>
          <input
            type="text"
            id="Nombre"
            name="name"
            className={styleInput}
            value={Inputs.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {error.name && <p style={errorStyles}>{error.name}</p>}
        </div>

        <div className={styleInputContainer}>
          <label htmlFor="Email" className={styleLabel}>
            Ingresa tu correo electronico
          </label>
          <input
            type="text"
            id="Email"
            name="email"
            className={styleInput}
            value={Inputs.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {error.email && <p style={errorStyles}>{error.email}</p>}
        </div>

        <div className={styleInputContainer}>
          <label htmlFor="TEL" className={styleLabel}>
            Ingresa tu numero telefonico
          </label>
          <input
            type="text"
            id="TEL"
            name="telefono"
            className={styleInput}
            value={Inputs.telefono}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {error.telefono && <p style={errorStyles}>{error.telefono}</p>}
        </div>

        <div className={styleInputContainer}>
          <label htmlFor="comentarios" className={styleLabel}>
            Comentarios
          </label>
          <textarea
            type="text"
            id="comentarios"
            name="comentarios"
            className={styleTextArea}
            value={Inputs.comentarios}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {error.comentarios && <p style={errorStyles}>{error.comentarios}</p>}
        </div>
        
        <div>
          <Button referencia={ButtonForm} styles="buttonGlobal" >Enviar</Button>
          <p ref={textForm}></p>
        </div>
      </form>
    </>
  );
}
