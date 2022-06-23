import React from "react";
import avatar from "../../assets/avatar.jpg";
import "./item.css";

const MemberItem = props => {
    return (
        <div className="item item-container center-aligned-item">
            <a href="#">
                <div className="image-container avatar-container">
                    <img src={avatar} alt="member-avatar" />
                </div>
                <p className="item-title">Username</p>
                <p className="item-subtitle">123K followers</p>
                <button type="button" className="btn follow-btn">Follow</button>
            </a>
        </div >
    );
};

export default MemberItem;