import React from "react";
import "./form.css";

const SignInForm = () => {
    return (
        <div className="background-container">
            <div className="form-container">
                <div className="form-info">
                    <h1 className="form-name">SIGN IN</h1>
                    <p className="form-description">Sign in for best experiences</p>
                </div>

                <p className="error-message">Your username, email or password is INCORRECT</p>

                <form action="#">
                    <div className="form-group">
                        <label className="username">Username</label>
                        <input type="text" className="form-control" id="username" placeholder="Enter your username" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="pasword" placeholder="Enter your pasword" required />
                    </div>

                    <div className="checkbox">
                        <label><input type="checkbox" className="remember" /> Remember me</label>
                    </div>

                    <button type="submit" className="btn form-btn">Sign in</button>

                    <a href="#" id="forgot-pwd-link">Forgot your password?</a>
                </form>

                <hr />

                <div className="alternate-option">
                    <p>New to Artphoria?</p>
                    <button type="button" className="btn form-btn"><a href="#">Sign up</a></button>
                </div>
            </div>
        </div>
    );
};

export default SignInForm;