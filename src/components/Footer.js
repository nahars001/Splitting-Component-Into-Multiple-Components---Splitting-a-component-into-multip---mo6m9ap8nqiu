import React from "react";
const Footer =(props)=> {
return(
     <div id={props.id}>
        <footer id="footer">
            {props.children}</footer>
     </div> 
);
}

export default Footer;