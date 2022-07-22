import React from "react";
import artwork from "../../assets/artwork.jpg";
import "./artwork-viewer.css";

const ArtworkViewer = props => {
    return (
        <>
            <div className="ratio image-box">
                <em className="fas fa-expand" id="fullscreen-btn" data-bs-toggle="modal" data-bs-target="#fullScreenArtwork"></em>
                <img src={artwork} alt="artwork" />
            </div>

            <div className="modal fade image-modal" id="fullScreenArtwork" tabIndex="-1" aria-labelledby="fullScreenArtworkLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            </button>
                        </div>
                        <div className="modal-body">
                            <img src={artwork} alt="full-screen-artwork" />
                        </div>
                        <div className="modal-footer"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ArtworkViewer;