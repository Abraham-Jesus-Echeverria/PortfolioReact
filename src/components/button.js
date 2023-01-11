import React from "react"; 

const Button = ({styles, children, handleButton, referencia}) => <button className={styles} onClick={handleButton} ref={referencia}>{children}</button> 

export default Button; 