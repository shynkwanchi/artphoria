import React from "react";
import { Link } from "react-router-dom";
import "./form.css";

const SignUpForm = () => {
    return (
        <div className="background-container">
            <div className="form-container">
                <div className="form-info">
                    <h1 className="form-name">SIGN UP</h1>
                    <p className="form-description">Fast, easy and always free</p>
                </div>

                <p className="error-message"></p>

                <form action="#">
                    <div className="row">
                        <div className="form-group col-12 col-sm-6">
                            <label htmlFor="fullname">Your fullname</label>
                            <input type="text" className="form-control" id="fullname" placeholder="John Doe" required />
                        </div>

                        <div className="form-group col-12 col-sm-6">
                            <label htmlFor="username">Your username</label>
                            <input type="text" className="form-control" id="username" placeholder="Enter your username" required />
                        </div>

                        <div className="form-group col-12 col-sm-6">
                            <label htmlFor="email">Your email</label>
                            <input type="email" className="form-control" id="email" placeholder="yourname@example.com" required />
                        </div>

                        <div className="form-group col-12 col-sm-6">
                            <label htmlFor="birthday">Your birthday</label>
                            <input type="date" className="form-control" id="birthday" required />
                        </div>

                        <div className="form-group col-12 col-sm-6">
                            <label htmlFor="password">Your password</label>
                            <input type="password" className="form-control" id="pasword" placeholder="At least 8 characters" required />
                        </div>

                        <div className="form-group col-12 col-sm-6">
                            <label htmlFor="verify-password">Verify your password</label>
                            <input type="password" className="form-control" id="verify-pasword" placeholder="Re-enter the same password" required />
                        </div>

                    </div>

                    <p className="notes">By clicking <strong>Sign up</strong>, you have agreed to our <a className="link" href="#">Terms</a> and <a className="link" href="#">Privacy policy</a>.</p>

                    <button type="submit" className="btn form-btn">Sign up</button>
                </form>

                <hr />

                <div className="alternate-option">
                    <p>Already a member?</p>
                    <button type="button" className="btn form-btn"><Link to="/sign-in">Sign in</Link></button>
                </div>
            </div>
        </div>
    );
};

export default SignUpForm;