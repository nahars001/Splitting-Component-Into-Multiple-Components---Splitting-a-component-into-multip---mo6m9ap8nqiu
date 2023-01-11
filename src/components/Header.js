import React from "react";
const Header = (props) => {
    return (<header id="header">
        <div id="container">
            {props.content}
        </div>
    </header>
    );
}

export default Header;