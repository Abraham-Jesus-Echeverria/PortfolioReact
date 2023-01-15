import React from "react"; 

const Link =({url, children, linkStyle})=> <a href={url} className={linkStyle}>{children}</a> 

export default Link; 