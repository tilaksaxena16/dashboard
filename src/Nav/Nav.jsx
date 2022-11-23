import React from "react";
import "./Nav.css";

const Nav = () => {

    return (
        <>
            <div className="nav-layout">
                <div className="width30">
                    <label className="nav-text">Title</label>
                </div>
                <div className="width20">
                    <label className="nav-text">Status</label>
                </div>
                <div className="width20">
                    <label className="nav-text">Stats</label>
                </div>
                <div className="width20 nav-button">
                    <label><i className="fa-solid fa-pen-nib icon-size"></i><span className="nav-button-name">Add new</span></label>
                </div>
            </div>
            <div className="nav-border"></div>
        </>
    )
}

export { Nav }