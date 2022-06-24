import React from "react";
import ArtworkGridItem from "../items/artwork-item";

const ArtworkGrid = () => {
    return (
        <div className="row row-cols-xl-5">
            <ArtworkGridItem />
            <ArtworkGridItem />
            <ArtworkGridItem />
            <ArtworkGridItem />
            <ArtworkGridItem />
            <ArtworkGridItem />
            <ArtworkGridItem />
            <ArtworkGridItem />
            <ArtworkGridItem />
            <ArtworkGridItem />
        </div>
    );
}

export default ArtworkGrid