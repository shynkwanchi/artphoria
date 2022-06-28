import React from "react";
import "/status-message.css";

export const ErrorMessage = (props) => {
    return (
        <p className="error-message">{props.errorMessage}</p>
    );  
};

export const SuccessMessage = (props) => {
    return (
        <p className="success-message">{props.successMessage}</p>
    );  
};