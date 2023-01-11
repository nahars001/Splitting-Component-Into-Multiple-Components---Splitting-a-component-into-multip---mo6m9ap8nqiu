import React from "react";
const Header = (props) => {
    return (<header id="header">
        <div id={props.id}>
            {props.content}
        </div>
    </header>
    );
}

export default Header;