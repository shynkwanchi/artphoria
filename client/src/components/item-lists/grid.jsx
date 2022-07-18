import React from "react";
import ArtworkItem from "../items/artwork-item";

const ArtworkGrid = () => {
    return (
        <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
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

export default ArtworkGrid