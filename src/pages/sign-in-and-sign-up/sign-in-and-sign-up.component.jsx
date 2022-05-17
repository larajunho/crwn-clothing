import React from "react"
import SignIn from "../../components/sign-in/sign-in.component"
import SignUp from "../../components/sign-up/sign-up.component"
import { Container, SignInAndSignUpContainer } from "./sign-in-and-sign-up.styles.jsx"

const SignInAndSignUpPage = () => (
	<SignInAndSignUpContainer className="row">
		<Container className="col-12 col-lg-6">
			<SignIn />
		</Container>
		<Container className="col-12 col-lg-6">
			<SignUp />
		</Container>
	</SignInAndSignUpContainer>
)

export default SignInAndSignUpPage
