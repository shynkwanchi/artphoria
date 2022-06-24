import React from "react";
import Banner from "../components/banner/banner";
import MemberCarousel from "../components/item-lists/carousel";
import ArtworkGrid from "../components/item-lists/grid";

const Home = () => {
    return (
        <main>
            <Banner />
            <div className="container" id="home-main-section">
                <section>
                    <h2 className="section-name">NEW ARTWORKS</h2>
                    <ArtworkGrid />
                </section>

                <hr />

                <section>
                    <h2 className="section-name">FEATURED ARTWORKS</h2>
                    <ArtworkGrid />
                </section>

                <hr />

                <section>
                    <h2 className="section-name">FEATURED MEMBERS</h2>
                    <MemberCarousel />
                </section>

                <section>
                    <h2 className="section-name">NEW MEMBERS</h2>
                    <MemberCarousel />
                </section>
            </div>
        </main>
    );
}

export default Home