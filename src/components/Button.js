import React from "react"; 

const Button = ({styles, children, handleButton, referencia, styleModalButton}) => <button className={styles} onClick={handleButton} ref={referencia} style={styleModalButton}>{children}</button> 
export default Button; 