import React from "react";
import { Link } from "react-router-dom";
import "./form.css";

const ForgotPasswordForm = () => {
    return (
        <div className="background-container">
            <div className="form-container">
                <div className="form-info">
                    <h1 className="form-name">FORGOT PASSWORD?</h1>
                    <p className="form-description">Reset your password here</p>
                </div>

                <p className="error-message"></p>

                <form action="#">
                    <div className="form-group">
                        <label htmlFor="username">Your email</label>
                        <input type="text" className="form-control" id="username" placeholder="Enter your email address" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Your NEW password</label>
                        <input type="password" className="form-control" id="pasword" placeholder="At least 8 characters" required />
                    </div>

                    <div className="form-group">
                            <label htmlFor="verify-password">Verify your NEW password</label>
                            <input type="password" className="form-control" id="verify-pasword" placeholder="Re-enter the same password" required />
                        </div>

                    <button type="submit" className="btn form-btn">Reset password</button>
                </form>

                <hr />

                <div className="alternate-option">
                    <p>Remember your password?</p>
                    <button type="button" className="btn form-btn"><Link to="/sign-in">Sign in</Link></button>
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordForm;