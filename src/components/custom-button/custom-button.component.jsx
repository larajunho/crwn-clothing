import React from "react"
import { CustomButtonWrapper } from "./custom-button.styles.jsx"

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
	<CustomButtonWrapper
		className={`${inverted ? "inverted" : " "} ${isGoogleSignIn ? "google-sign-in" : " "} custom-button`}
		{...otherProps}
	>
		{children}
	</CustomButtonWrapper>
)

export default CustomButton
