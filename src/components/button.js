import React from "react"; 

const Button = ({styles, children, handleButton}) => <button className={styles} onClick={handleButton}>{children}</button> 

export default Button; 