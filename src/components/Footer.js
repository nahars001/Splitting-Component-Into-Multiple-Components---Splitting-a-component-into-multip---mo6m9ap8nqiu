import React from "react";
const Footer =(props)=> {
return(
     <div id={props.id}>
        <footer id="my-footer"> {props.content}</footer>
     </div> 
);
}

export default Footer;