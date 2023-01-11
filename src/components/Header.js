import React from "react";
const Header = (props) => {
    return (
   <div id={props.id}> 
            <header id="my-header">{props.content}</header>
    </div>
    );
}

export default Header;