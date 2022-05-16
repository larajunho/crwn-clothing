import React from "react"
import { FormInputLabel, Inputt, Group } from "./form-input.styles.jsx"

const FormInput = ({ handleChange, label, ...otherProps }) => (
	<Group>
		<Inputt onChange={handleChange} {...otherProps} />
		{label ? <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel> : null}
	</Group>
)
export default FormInput
