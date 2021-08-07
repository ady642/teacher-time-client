import React from "react";

const Field = ({
	label = '',
	id = '',
	type = '',
	placeholder ='',
	required = false,
	autoComplete = '',
	value = '',
	onChange = (e: any) => {}
}) => (
	<div className="FormRow">
		<input
			className="FormRowInput"
			id={id}
			type={type}
			placeholder={placeholder}
			required={required}
			autoComplete={autoComplete}
			value={value}
			onChange={onChange}
		/>
	</div>
);

export default Field
