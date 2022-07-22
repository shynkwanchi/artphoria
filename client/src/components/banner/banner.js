import React from "react";
import "./banner.css";

const Banner = () => {
    return (
        <div className="background-container">
            <div className="banner-content">
                <h1>ARTPHORIA</h1>
                <p>The World of Creativity and Enthusiasm</p>
                <button className="btn"><a href="#home-main-section">GET STARTED</a></button>
            </div>
        </div>
    );
}

export default Banner;