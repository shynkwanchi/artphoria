import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
    return (
        <footer>
            <input type="checkbox" id="show-footer" />
            <label htmlFor="show-footer" className="show-footer-btn"><em className="fas fa-chevron-up"></em></label>
            <div className="footer-content">
                <div className="social-links">
                    <a href="https://www.facebook.com/duy.nguyenquang.9465177/"><em className="fab fa-facebook"></em></a>
                    <a href="https://www.instagram.com/_shyn.kwan.chi_/"><em className="fab fa-instagram"></em></a>
                    <a href="https://www.youtube.com/c/DUYWIN"><em className="fab fa-youtube"></em></a>
                    <a href="https://github.com/shynkwanchi"><em className="fab fa-github"></em></a>
                </div>
                <ul className="footer-links">
                    <li><Link to="/about-us">About us</Link></li>
                    <li><Link to="/faqs">FAQs</Link></li>
                    <li><Link to="/contact-us">Contact us</Link></li>
                    <li><Link to="/terms">Terms</Link></li>
                    <li><Link to="/privacy-policy">Privacy policy</Link></li>
                </ul>
                <p className="copyright">
                    Artphoria © 2022. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;