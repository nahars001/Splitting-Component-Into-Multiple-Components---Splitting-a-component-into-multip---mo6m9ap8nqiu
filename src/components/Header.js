import React from "react";
const Header = (props) => {
    return (
   <div id={props.id}> 
            <header id="container">{props.content}</header>
    </div>
    );
}

export default Header;