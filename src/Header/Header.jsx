import React from "react";
import "./Header.css";

const Header = () => {

    return (
        <>
            <div className="header-container">
                <div>
                    <i className="fa-brands fa-react header-icon"></i>
                    <label className="header-name">Rival<span className="col-blue">CMS</span></label>
                </div>
                <div className="div-flex">
                    <div className="header-button">
                        <label className="header-button-name">Pro plan</label>
                    </div>
                    <div className="header-icon-right">
                        <i className="fa-solid fa-user-tie"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Header }