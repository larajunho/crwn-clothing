import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { ReactComponent as Logo } from "../../assets/crown.svg"
import { HeaderContainer, LogoContainer, Options, Option } from "./header.styles.jsx"
import { auth } from "../../firebase/firebase.utils"
import CartIcon from "../cart-icon/cart-icon.component"
import CartDropdown from "../cart-dropdown/cart-dropdown.component"
import { selectCartHidden } from "../../redux/cart/cart.selectors"
import { selectCurrentUser } from "../../redux/user/user.selectors"

const Header = ({ currentUser, hidden }) => (
	<HeaderContainer>
		<LogoContainer to="/">
			<Logo />
		</LogoContainer>
		<Options>
			<Option to="/shop">SHOP</Option>
			<Option to="/shop">CONTACT</Option>
			{currentUser ? (
				<Option onClick={() => auth.signOut()}>SIGN OUT</Option>
			) : (
				<Option to="/signin">SIGN IN</Option>
			)}
			<CartIcon />
		</Options>
		{!hidden && <CartDropdown />}
	</HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
})

export default connect(mapStateToProps)(Header)
