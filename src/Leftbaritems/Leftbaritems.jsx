import React from "react";
import "./Leftbaritems.css";

const Leftbaritems = (user) => {

    return (
        <>
            <div className="leftitem-layout">
                <div className="left-icon-size">
                    <i className="fa-solid fa-house"></i>
                </div>
                <div className="letf-item-name">
                    <label>{user.name}</label>
                </div>
            </div>
        </>
    )
}

export { Leftbaritems }