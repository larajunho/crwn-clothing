import React, { useState } from "react"

import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"
import { auth, signInWithGoogle } from "../../firebase/firebase.utils"
import { SignInn, Buttonns } from "./sign-in.styles.jsx"

const SignIn = () => {
	const [state, setState] = useState({
		email: "",
		password: "",
	})

	const handleSubmit = async event => {
		event.preventDefault()
		const { email, password } = state
		try {
			await auth.signInWithEmailAndPassword(email, password)
		} catch (error) {
			console.log(error)
		}
	}

	const handleChange = event => {
		const { value, name } = event.target
		setState({ ...state, [name]: value })
	}

	return (
		<SignInn>
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					name="email"
					type="email"
					value={state.email}
					label="email"
					handleChange={handleChange}
					required
				/>

				<FormInput
					name="password"
					type="password"
					value={state.password}
					handleChange={handleChange}
					label="password"
					required
				/>
				<Buttonns>
					<CustomButton type="submit">SIGN IN</CustomButton>
					<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
						Sign in with Google
					</CustomButton>
				</Buttonns>
			</form>
		</SignInn>
	)
}

export default SignIn
