import React from "react";
import 'card.css';
import artworkThumbnail from '../../assets/artwork.jpg'

const ArtworkCard = props => {
    return (
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 card-container">
            <a href="#">
                <div class="image-container">
                    <img src={artworkThumbnail} alt="artwork-thumbnail" />
                </div>
                <p class="artwork-title">Artwork title</p>
                <p class="stats">123K views - 3 months ago</p>
            </a>
            <p class="author">by <a href="#">Username</a></p>
        </div>
    );
}

export default ArtworkCard