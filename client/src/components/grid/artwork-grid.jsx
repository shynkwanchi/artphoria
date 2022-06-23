import React, { Component } from "react";
import ArtworkItem from "../items/artwork-item";

class ArtworkGrid extends Component {
    render() {
        return (
            <div className="row row-cols-xl-5">
                <ArtworkItem />
                <ArtworkItem />
                <ArtworkItem />
                <ArtworkItem />
                <ArtworkItem />
                <ArtworkItem />
                <ArtworkItem />
                <ArtworkItem />
                <ArtworkItem />
                <ArtworkItem />
            </div>
        );
    }
}

export default ArtworkGrid