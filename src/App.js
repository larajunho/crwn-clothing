import React, { useEffect } from "react"
import { connect } from "react-redux"
import { Redirect, Route, Switch } from "react-router-dom"
import { createStructuredSelector } from "reselect"
import "./App.scss"
import Header from "./components/header/header.component"
import { auth, createUserProfileDocument } from "./firebase/firebase.utils"
import CheckoutPage from "./pages/checkout/checkout.component"
import HomePage from "./pages/homepage/homepage.component"
import ShopPage from "./pages/shop/shop.component"
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"
import { setCurrentUser } from "./redux/user/user.actions"
import { selectCurrentUser } from "./redux/user/user.selectors"

const App = ({ currentUser, setCurrentUser }) => {
	useEffect(() => {
		const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth)
				userRef.onSnapshot(snapShot => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data(),
					})
				})
			}
			setCurrentUser(userAuth)
		})

		return () => {
			unsubscribeFromAuth()
		}
	}, [])

	return (
		<div className="container">
			<Header />
			<div className="page">
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route path="/checkout" component={CheckoutPage} />
					<Route
						exact
						path="/signin"
						render={() => (currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />)}
					/>
				</Switch>
			</div>
		</div>
	)
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
