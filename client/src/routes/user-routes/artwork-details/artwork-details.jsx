import React from "react";
import { Link } from "react-router-dom";
import ArtworkViewer from "../../../components/artwork-viewer/artwork-viewer";
import "./artwork-details.css";
import avatar from "../../../assets/avatar.jpg";

const ArtworkDetails = () => {
    return (
        <main>
            <div className="container">
                <section>
                    <ArtworkViewer />

                    <h3 className="artwork-title">Title</h3>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <p className="basic-specs">123,456 views - Mmm Dd, Yyyy</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="row row-col-5">
                                <div className="col artwork-interaction-button">
                                    <em className="far fa-thumbs-up artwork-interaction-icon"></em>
                                    <br />
                                    123K
                                </div>
                                <div className="col artwork-interaction-button">
                                    <em className="far fa-thumbs-down artwork-interaction-icon"></em>
                                    <br />
                                    123
                                </div>
                                <div className="col artwork-interaction-button">
                                    <em className="fas fa-share-alt artwork-interaction-icon"></em>
                                    <br />
                                    Share
                                </div>
                                <div className="col artwork-interaction-button">
                                    <em className="far fa-bookmark artwork-interaction-icon"></em>
                                    <br />
                                    Save
                                </div>
                                <div className="col artwork-interaction-button">
                                    <em className="fas fa-ellipsis artwork-interaction-icon"></em>
                                    <br />
                                    More
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div className="row align-items-center" id="member-specs">
                        <div className="col-12 col-sm-auto">
                            <Link to="/member-profile">
                                <div className="member-avatar-container">
                                    <img src={avatar} alt="member-avatar" />
                                </div>
                            </ Link>
                        </div>
                        <div className="col">
                            <Link to="/member-profile" className="username">
                                Username
                            </ Link>
                            <p className="followers">123K followers</p>
                        </div>
                        <div className="col-12 col-sm-auto">
                            <button type="button" className="btn follow-btn" id="follow-btn-in-artwork-details">Follow</button>
                        </div>
                    </div>
                </section>

                <hr className="section-separator" />

                <section id="description">
                    <h2 className="section-name">DESCRIPTION</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos enim autem exercitationem at tempora aperiam iusto, doloribus quidem minima ducimus nobis aliquam fuga commodi blanditiis maxime mollitia neque non quo?</p>
                </section>

                <hr className="section-separator" />

                <section>
                    <h2 className="section-name">YOU MAY ALSO LIKE</h2>
                </section>

                <hr className="section-separator" />

                <section>
                    <h2 className="section-name">COMMENTS</h2>
                </section>
            </div>
        </main>
    );
}

export default ArtworkDetails;