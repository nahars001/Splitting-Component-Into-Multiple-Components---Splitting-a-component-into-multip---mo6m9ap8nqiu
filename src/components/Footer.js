import React from "react";
const Footer =(props)=> {
return(
     <div id={props.id}>
        <footer id={props.id}>This is the footer</footer>
        <footer id={props.id}> {props.content}</footer>
     </div> 
);
}

export default Footer;