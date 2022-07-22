import React from "react";
import { Link } from "react-router-dom";
import avatar from "../../assets/avatar.jpg";
import "./item.css";

const MemberItem = props => {
    return (
        <div className="item-container small-item">
            <Link to="/member-profile">
                <div className="image-container">
                    <img src={avatar} alt="member-avatar" />
                </div>
                <p className="item-title">Username</p>
                <p className="item-subtitle">123K followers</p>
                <button type="button" className="btn follow-btn">Follow</button>
            </Link>
        </div >
    );
};

export default MemberItem;