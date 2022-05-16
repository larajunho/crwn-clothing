import React, { useState } from "react"

import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils"

import { Signup } from "./sign-up.styles.jsx"

const SignUp = () => {
	const [state, setState] = useState({
		displayName: "",
		email: "",
		password: "",
		confirmPassword: "",
	})

	const handleSubmit = async event => {
		event.preventDefault()
		const { displayName, email, password, confirmPassword } = state

		if (password !== confirmPassword) {
			alert("passwords don't match")
			return
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password)

			await createUserProfileDocument(user, { displayName })
			setState({
				displayName: "",
				email: "",
				password: "",
				confirmPassword: "",
			})
		} catch (error) {
			console.error(error)
		}
	}

	const handleChange = event => {
		const { name, value } = event.target

		setState({ ...state, [name]: value })
	}

	return (
		<Signup>
			<h2>I do not have a account</h2>
			<span>Sign up with your email and password</span>
			<form className="sign-up-form" onSubmit={handleSubmit}>
				<FormInput
					type="text"
					name="displayName"
					value={state.displayName}
					onChange={handleChange}
					label="Display Name"
					required
				/>
				<FormInput
					type="email"
					name="email"
					value={state.email}
					onChange={handleChange}
					label="Email"
					required
				/>
				<FormInput
					type="password"
					name="password"
					value={state.password}
					onChange={handleChange}
					label="Password"
					required
				/>
				<FormInput
					type="password"
					name="confirmPassword"
					value={state.confirmPassword}
					onChange={handleChange}
					label="confirm Password"
					required
				/>
				<CustomButton type="submit"> SIGN UP</CustomButton>
			</form>
		</Signup>
	)
}

export default SignUp
