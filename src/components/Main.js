import React from "react";

const Main = (props) => {
    return (
        <div id={props.id}>
            {props.content}
        </div>
    );
}

export default Main;