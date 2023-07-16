import React, { useCallback } from "react";
import { useState } from "react";

const ViewText = ({ text,age }) => {
    // console.log("view text component")

    const apiConnect =() => {
        for (let i = 0; i <= 100; i++) {
            // console.log("view counter component")

        }
    }
    // console.log(text)
    apiConnect();
    return (
        <div className="box">
            <p>the included text: </p>
            <p>{text.name} </p>
            <button className="but" onClick={age}>add age</button>
            <p>age:{text.age}</p>
        </div>
    );
}
export default React.memo(ViewText);