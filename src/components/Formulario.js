import React from "react";
import Button from "./Button";
import { useValidateForm } from "./hooks/validateForm";
const ButtonSubmitSyle = {};

const errorStyles = { 
  color: "red", 
  marginBottom: "6px"
}
export default function Formulario({
  styleInputContainer,
  styleLabel,
  styleInput,
  styleTextArea,
}) {
  let initialState = {
    name: "",
    email: "",
    telefono: "",
    comentarios: "",
  };

  const validateForm = (Inputs) => {
    let errores = {};
    let RegexNombre = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let RegexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexPhone = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;  
    let RegexComments = /^.{1,255}$/;

    if (!Inputs.name.trim()) {
      errores.name = "el campo nombre es solicitado";
    } else if (!RegexNombre.test(Inputs.name.trim())) {
      errores.name = "solo puedes escribir letras y espacios";
    }

    // si el input viene vacio entonces se cumple la primera condicion por lo cual se ingresa un valor al objeto de errores, pero si se cumple la segunda condicion que es que el contenido del imput no coincida con la expresion regualar entonces, se genera el segundo error, siempre y cuando haya un error en el objeto no se podra enviar el formulario.

    if (!Inputs.email.trim()) {
      errores.email = "el campo email es solicitado";
    } else if (!RegexEmail.test(Inputs.email.trim())) {
      errores.email = "escribe un email que sea valido";
    }

    if (!Inputs.telefono.trim()) {
      errores.telefono = "el campo telefono es requerido";
    } else if (!regexPhone.test(Inputs.telefono.trim())){ 
      errores.telefono = "Escribe un numero telefonico valido"
    }

    if (!Inputs.comentarios.trim()) {
      errores.comentarios = "el campo comentarios es requerido";
    } else if (!RegexComments.test(Inputs.comentarios.trim())) {
      errores.comentarios = "no puedes ingresar mas de 255 caracteres";
    }

    return errores;
  };
  const { Inputs, error, handleChange, handleBlur, handleSubmit } = useValidateForm(initialState, validateForm);
  return (
    <>
      <form>
        <div className={styleInputContainer}>
          <label htmlFor="Nombre" className={styleLabel}>
            Ingresa tu nombre
          </label>
          <input type="text" id="Nombre" name="name" className={styleInput} value={Inputs.name} onChange={handleChange} onBlur={handleBlur} /> 
          { 
          error.name && <p style={errorStyles}>{error.name}</p>
          }
        </div>
        <div className={styleInputContainer}>
          <label htmlFor="Email" className={styleLabel}>
            Ingresa tu correo electronico
          </label>
          <input type="text" id="Email" name="email" className={styleInput} value={Inputs.email} onChange={handleChange} onBlur={handleBlur} />
          { 
          error.email && <p style={errorStyles}>{error.email}</p>
          }
        </div>
        <div className={styleInputContainer}>
          <label htmlFor="TEL" className={styleLabel}>
            Ingresa tu numero telefonico
          </label>
          <input type="text" id="TEL" name="telefono" className={styleInput} value={Inputs.telefono} onChange={handleChange} onBlur={handleBlur} />
          { 
          error.telefono && <p style={errorStyles}>{error.telefono}</p>
          }
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
           { 
          error.comentarios && <p style={errorStyles}>{error.comentarios}</p>
          }
        </div>
        <div>
          <Button> enviar</Button>
        </div>
      </form>
    </>
  );
}
