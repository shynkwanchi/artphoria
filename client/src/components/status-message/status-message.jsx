import React from "react";
import "./status-message.css";

export const ErrorMessage = (props) => {
    return (
        <p className="alert alert-dismissible fade show error-message" role="alert">{props.errorMessage}</p>
    );  
};

export const SuccessMessage = (props) => {
    return (
        <p className="alert alert-dismissible fade show success-message" role="alert">{props.successMessage}</p>
    );  
};