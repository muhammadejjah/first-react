import React from "react";
const Form = (props)=>{
    return<form>{props.children}</form>;
}
const Controller = (props) => {
    // console.log(props.children)
    return (
        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", width: "80%" }}>{props.children}</div>
    );
}
Form.Controller=Controller;
export default Form;