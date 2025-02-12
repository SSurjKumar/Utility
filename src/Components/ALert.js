import React from "react";

function Alert(props) {
    return (
        props.alert && (
            <div className="alert alert-success d-flex align-items-center alert-dismissible fade show" role="alert">
                <div>
                    {props.alert} {/* Dynamically show alert message */}
                </div>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                ></button>
            </div>
        )
    );
}

export default Alert;
