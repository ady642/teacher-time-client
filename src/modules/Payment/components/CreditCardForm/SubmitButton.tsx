import React from "react";

const SubmitButton = ({ processing = false, error = { message: '' }, children = null, disabled = false }) => (
	<button
		className={`SubmitButton ${error?.message ? "SubmitButton--error" : ""}`}
		type="submit"
		disabled={processing || disabled}
	>
		{processing ? "En cours..." : children}
	</button>
);

export default SubmitButton
