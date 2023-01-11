import React from "react";
const Footer =(props)=> {
return(
    <div id={props.id}>
        <footer id="container">{props.content}</footer>
    </div>
);
}

export default Footer;