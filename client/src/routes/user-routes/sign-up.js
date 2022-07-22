import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import "../../components/form/form.css";

const SignUp = () => {   
    return (
        <main>
            <div className="background-container">
                <div className="form-container">
                    <div className="form-info">
                        <h1 className="form-name">SIGN UP</h1>
                        <p className="form-description">Fast, easy and always free</p>
                    </div>

                    <form>
                        <div className="row">
                            <div className="form-group col-12 col-sm-6">
                                <label htmlFor="fullname">Your fullname</label>
                                <input type="text" name="fullname" className="form-control" id="fullname" placeholder="John Doe" required />
                            </div>

                            <div className="form-group col-12 col-sm-6">
                                <label htmlFor="username">Your username</label>
                                <input type="text" name="username" className="form-control" id="username" placeholder="Example123" required />
                            </div>

                            <div className="form-group col-12 col-sm-6">
                                <label htmlFor="email">Your email</label>
                                <input type="email" name="email" className="form-control" id="email" placeholder="yourname@example.com" required />
                            </div>

                            <div className="form-group col-12 col-sm-6">
                                <label htmlFor="birthday">Your birthday</label>
                                <input type="date" name="birthday" className="form-control" id="birthday" required />
                            </div>

                            <div className="form-group col-12 col-sm-6">
                                <label htmlFor="password">Your password</label>
                                <input type="password" name="password" className="form-control" id="pasword" placeholder="At least 8 characters" required />
                            </div>

                            <div className="form-group col-12 col-sm-6">
                                <label htmlFor="verify-password">Verify your password</label>
                                <input type="password" name="verifyPassword" className="form-control" id="verify-pasword" placeholder="Re-enter the same password" required />
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
        </main>
    );
}

export default SignUp;