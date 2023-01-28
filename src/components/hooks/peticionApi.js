
export function useFetch () { 

    const fetchPost = async (url, name, email, telefono, comentarios, textForm, ButtonForm) => {  
        try {  
            textForm.current.textContent = "enviando ...";  
            ButtonForm.current.setAttribute("disabled", true); 
            ButtonForm.current.classList.add("disabledButton")
            let options = { 
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email, 
                    telefono: telefono,
                    comentarios: comentarios, 
                })
            }
           let res = await fetch(url, options);  
           let err = { 
            status: res.status, 
            statusText: res.statusText,
           }  

           console.log(res.ok); 

           if(res.ok) {  
            textForm.current.textContent = "El formulario ha sido enviado exitosamente";
            setTimeout(()=>{ 
                textForm.current.textContent = "";
                ButtonForm.current.removeAttribute("disabled");  
                ButtonForm.current.classList.remove("disabledButton");
            }, 2000); 
           }else { 
            throw err;
           } 
        }catch(err){ 
          textForm.current.textContent = `${err.statusText || "los sentimos ha ocurrido un error intentalo mas tarde" } ${err.status || ""}`;  
          setTimeout(()=>{ 
            textForm.current.textContent = ""; 
          }, 2000);
        }

    }

    return { 
       fetchPost
    }
   
}
   