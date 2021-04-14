import React from "react";

const SubmitButton = ({ processing = false, error = false, children = '<div/>', disabled = false }) => (
    <button
        className={`SubmitButton ${error ? "SubmitButton--error" : ""}`}
        type="submit"
        disabled={processing || disabled}
    >
        {processing ? "Processing..." : children}
    </button>
);

export default SubmitButton
