import { useState } from "react";
import { useFetch } from "./peticionApi";
import { validateForm } from "./formMensages";

export function useValidateForm(initialState, textForm, ButtonForm ) {
  const { fetchPost } = useFetch();
  const [Inputs, setInputs] = useState(initialState);
  const [error, setError] = useState({
    initialError: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...Inputs,
      [name]: value,
    });
  };
  const handleBlur = (e) => {
    handleChange(e);
    setError(validateForm(Inputs));
  };

  const clearForm = () => {
    //Convertimos los inputs (json) a un arreglo de arreglos
    const inputsArray = Object.entries(Inputs);
    // Recorremos el arreglo y retornamos un nuevo arreglo de arreglos conservando el key
    const clearInputsArray = inputsArray.map(([key]) => [key, ""]);

    //Convertimos el arreglo de arreglos nuevamente a formato json
    const inputsJson = Object.fromEntries(clearInputsArray);

    setInputs(inputsJson);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleChange(e);
    setError(validateForm(Inputs));

    if (Object.keys(error).length === 0) {
      let url = "https://formsubmit.co/ajax/abraham.ech9@gmail.c";
      fetchPost(
        url,
        Inputs.name,
        Inputs.email,
        Inputs.telefono,
        Inputs.comentarios, 
        textForm, 
        ButtonForm, 
      ); 
      clearForm();
    } else {
      alert("lo sentimos el formulario no puede ser enviado");
    }
    // si el objeto de errores viene vacio entonces podemos enviar el formulario
  };
  return {
    Inputs,
    error,
    handleChange,
    handleBlur,
    handleSubmit,
  };
}
