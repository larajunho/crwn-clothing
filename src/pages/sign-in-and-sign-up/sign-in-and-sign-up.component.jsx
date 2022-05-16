import React from "react"

import SignIn from "../../components/sign-in/sign-in.component"
import "./sign-in-and-sign-up.styles.scss"
import SignUp from "../../components/sign-up/sign-up.component"

const SignInAndSignUpPage = () => (
	<div className="sign-in-and-sign-up row">
		<div className="sign-in col-12 col-lg-6">
			<SignIn />
		</div>
		<div className="sign-up col-12 col-lg-6">
			<SignUp />
		</div>
	</div>
)

export default SignInAndSignUpPage
