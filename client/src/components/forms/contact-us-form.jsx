import React from "react";
import "./form.css";

const ContactUsForm = () => {
    return (
        <div className="background-container">
            <div className="form-container">
                <div className="form-info">
                    <h1 className="form-name">CONTACT US</h1>
                    <p className="form-description">Feel free to contact us</p>
                </div>

                <div className="row">
                    <div className="col-12 col-sm-6" id="contact-info">
                        <ul>
                            <li><em className="fas fa-map-marker-alt"></em> 702 Nguyen Van Linh, Tan Hung Ward, District 7, Ho Chi Minh City, Vietnam</li>
                            <li><em className="fas fa-envelope"></em> artphoria@gmail.com</li>
                            <li><em className="fas fa-phone"></em> 0973953755</li>
                        </ul>
                    </div>

                    <div className="col-12 col-sm-6">
                        <p className="error-message"></p>

                        <form action="#" id="contact-us-form">
                            <div className="form-group">
                                <label htmlFor="fullname">Your fullname</label>
                                <input type="text" className="form-control" id="fullname" placeholder="John Doe" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email-phone">Your email or phone number</label>
                                <input type="text" className="form-control" id="email-phone" placeholder="yourname@example.com / 0123456789" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="topic">Topic</label>
                                <input type="text" className="form-control" id="topic" placeholder="Enter your topic" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Your message</label>
                                <textarea className="form-control" id="message" placeholder="Enter your message" required></textarea>
                            </div>

                            <button type="submit" className="btn form-btn">Send</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactUsForm;