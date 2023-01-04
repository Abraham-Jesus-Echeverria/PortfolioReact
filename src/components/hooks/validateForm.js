import React, { useState } from "react";

export function useValidateForm (initialState, validateForm) {
    const[Inputs, setForm] = useState(initialState); 
    const[error, setError] = useState({}); 

    const handleChange = (e) =>{  
        const{name, value} = e.target; 
        setForm({ 
            ...Inputs,   
            [name]: value

        });   
        console.log(Inputs.email)
    }  
    const handleBlur = (e) =>{ 
        handleChange(e);  
        setError(validateForm(Inputs));
        console.log(validateForm(Inputs));
    } 

    const handleSubmit = (e) => { 
        e.preventDefault();  
        setError(validateForm(Inputs)); 
        if(Object.keys(error).length === 0){ 
           console.log("se ha enviado el formulario")
        } 
        // si el objeto de errores viene bacio entonces podemos enviar el formulario 
    } 
    return { 
        Inputs, 
        error, 
        handleChange, 
        handleBlur, 
        handleSubmit
    }
}