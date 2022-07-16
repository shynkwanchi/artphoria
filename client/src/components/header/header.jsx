import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
    return (
        <header>
            <nav>
                <input type="checkbox" id="show-search" />
                <input type="checkbox" id="show-menu" />
                <label htmlFor="show-menu" className="menu-icon"><em className="fas fa-bars"></em></label>
                <div className="header-content">
                    <div className="logo"><Link to="/">ARTPHORIA</Link></div>
                    <ul className="links">
                        <li>
                            <Link to="/"><em className="fas fa-home nav-icon"></em>Home</Link>
                        </li>
                        <li>
                            <Link to="/explore"><em className="fas fa-compass nav-icon"></em>Explore</Link>
                        </li>
                        <li>
                            <Link to="/settings"><em className="fas fa-cog nav-icon"></em>Settings</Link>
                        </li>
                        <li>
                            <Link to="/help"><em className="fas fa-question-circle nav-icon"></em>Help</Link>
                        </li>
                        <li>
                            <Link to="/sign-in"><em className="fas fa-user-circle nav-icon"></em>SIGN IN</Link>
                        </li>
                    </ul>
                </div>
                <label htmlFor="show-search" className="search-icon"><em className="fas fa-search"></em></label>
                <form action="#" className="search-box">
                    <input type="text" placeholder="Search" required />
                    <button type="submit" className="go-icon"><em className="fas fa-check"></em></button>
                </form>
            </nav>
        </header>
    );
};

export default Header;