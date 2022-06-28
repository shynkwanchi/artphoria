import React from "react";
import { Link } from "react-router-dom";
import "../../components/form/form.css";

const ForgotPassword = () => {
    return (
        <main>
            <div className="background-container">
            <div className="form-container">
                <div className="form-info">
                    <h1 className="form-name">FORGOT PASSWORD?</h1>
                    <p className="form-description">Reset your password here</p>
                </div>

                

                <form action="#">
                    <div className="form-group">
                        <label htmlFor="email">Your email</label>
                        <input type="text" className="form-control" id="email" placeholder="yourname@example.com" required />
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
        </main>
    );
}

export default ForgotPassword;