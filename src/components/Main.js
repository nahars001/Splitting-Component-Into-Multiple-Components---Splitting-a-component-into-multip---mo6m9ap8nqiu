import React from "react";

const Main = (props) => {
    return (
        <div id={props.id}>
            <main id="container">{props.content}</main>
        </div>
    );
}

export default Main;