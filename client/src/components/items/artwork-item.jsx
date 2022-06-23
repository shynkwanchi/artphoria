import React from "react";
import artwork from "../../assets/artwork.jpg";
import "./grid-item.css";

const ArtworkGridItem = props => {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 item-container">
            <a href="#">
                <div className="image-container">
                    <img src={artwork} alt="artwork-thumbnail" />
                </div>
                <p className="item-title">Artwork title</p>
                <p className="item-specs">123K views - Mmm Dd Yyyy</p>
            </a>
            <p className="item-subtitle">by <a href="#">Username</a></p>
        </div>
    );
};

export default ArtworkGridItem;