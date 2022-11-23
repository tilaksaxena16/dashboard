import React from "react";
import "./Maincontent.css";

const Maincontent = (user) => {

    return (
        <>
            <div className="main-content-display">
                <div className="width30">
                    <h6 className="main-content-h6">Design: A Survival Guide for Beginners</h6>
                    <label className="main-content-label">Posted 3 days ago</label>
                </div>
                <div className="width20">
                    <label className="main-content-button-name main-content-button">Published</label>
                </div>
                <div className="width20">
                    <label className="content-child"><span className="content-num">{user.num}</span>views</label>
                    <i className="fa-regular fa-circle-up icon"></i>
                </div>
                <div className="width20">
                    <label className="dot">. . .</label>
                </div> 
            </div>
        </>
    )
}

export { Maincontent }