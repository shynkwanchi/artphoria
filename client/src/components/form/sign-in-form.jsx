import React from "react";
import { Link } from "react-router-dom";
import "./form.css";

const SignInForm = () => {
    return (
        <div className="background-container">
            <div className="form-container">
                <div className="form-info">
                    <h1 className="form-name">SIGN IN</h1>
                    <p className="form-description">Sign in for best experiences</p>
                </div>

                <p className="error-message"></p>

                <form action="#">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" id="username" placeholder="Enter your username" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="pasword" placeholder="Enter your pasword" required />
                    </div>

                    <button type="submit" className="btn form-btn">Sign in</button>

                    <Link to="/forgot-password" className= "link" id="forgot-pwd-link">Forgot password?</Link>
                </form>

                <hr />

                <div className="alternate-option">
                    <p>New to Artphoria?</p>
                    <button type="button" className="btn form-btn"><Link to="/sign-up">Sign up</Link></button>
                </div>
            </div>
        </div>
    );
};

export default SignInForm;