import React from "react"; 

export default function PersonalInformation({stylesContainer, stylesItems}){ 
    return(<> 
        <div className={stylesContainer}> 
            <p><i className={`fa-solid fa-envelope ${stylesItems}`}></i>abraham.ech9@gmail.com</p> 
            <p><i className={`fa-brands fa-whatsapp ${stylesItems}`}></i>9994-23-34-16</p> 
            <p><i className={`fa-solid fa-location-dot ${stylesItems}`}></i>Mérida Yucatán México</p>   
        </div>
    </>); 
}