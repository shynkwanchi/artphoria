import React from "react";
import { Link } from "react-router-dom";
import artwork from "../../assets/artwork.jpg";
import "./item.css";

const ArtworkItem = props => {
    return (
        <div className="item-container big-item">
            <Link to="/artwork-details">
                <div className="image-container">
                    <img src={artwork} alt="artwork-thumbnail" />
                </div>
                <p className="item-title">Artwork title</p>
                <p className="item-extra">123K views - Mmm Dd, Yyyy</p>
            </Link>
            <p className="item-subtitle">by <Link to="/member-profile">Username</Link></p>
        </div>
    );
};

export default ArtworkItem;