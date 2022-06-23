import React from "react";
import Banner from "../components/banner/banner";
import ArtworkGrid from "../components/grid/artwork-grid";

const Home = () => {
    return (
        <main>
            <Banner />
            <div className="container" id="home-main-section">
                <section className="artworks">
                    <h2 className="section-name">NEW ARTWORKS</h2>
                    <ArtworkGrid />
                </section>

                <hr />

                <section className="artworks">
                    <h2 className="section-name">FEATURED ARTWORKS</h2>
                    <ArtworkGrid />
                </section>

            </div>
        </main>
    );
}

export default Home