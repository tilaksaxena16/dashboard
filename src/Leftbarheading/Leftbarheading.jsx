import React from "react";
import "./Leftbarheading.css";

const Leftbarheading = (user) => {

    return (
        <>
            <div className="left-heading-container">
                <label>{user.name}</label>
            </div>
        </>
    )
}

export { Leftbarheading }