import "./footer.css";

const Footer = () => {
    return (
        <footer>
            <input type="checkbox" id="show-footer" />
            <label htmlFor="show-footer" className="show-footer-btn"><em className="fas fa-angle-up"></em></label>
            <div className="footer-content">
                <div className="social-links">
                    <a href="https://www.facebook.com/duy.nguyenquang.9465177/"><em className="fab fa-facebook"></em></a>
                    <a href="https://www.instagram.com/_shyn.kwan.chi_/"><em className="fab fa-instagram"></em></a>
                    <a href="https://www.youtube.com/c/DUYWIN"><em className="fab fa-youtube"></em></a>
                    <a href="https://github.com/shynkwanchi"><em className="fab fa-github"></em></a>
                </div>
                <ul className="footer-links">
                    <li><a href="#">About us</a></li>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Privacy policy</a></li>
                </ul>
                <p className="copyright">
                    Artphoria © 2022. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;