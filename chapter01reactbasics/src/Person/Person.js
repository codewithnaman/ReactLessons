import React from "react";

const person = (props) => {
    return (
        <div>
            <p><b>Name :</b> {props.name}</p>
            <p><b>Age  :</b> {props.age}</p>
            <p>{props.children}</p>
        </div>
    );
}

export default person;