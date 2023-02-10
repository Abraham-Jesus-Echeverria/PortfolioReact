import React from "react"; 
const Link =({url, children, linkStyle, target})=> <a href={url} className={linkStyle} target={target} rel="noreferrer">{children}</a> 

export default Link; 