import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import { ReactComponent as Logo } from "../../assets/crown.svg"
import { auth } from "../../firebase/firebase.utils"
import { selectCartHidden } from "../../redux/cart/cart.selectors"
import { selectCurrentUser } from "../../redux/user/user.selectors"
import CartDropdown from "../cart-dropdown/cart-dropdown.component"
import CartIcon from "../cart-icon/cart-icon.component"
import { HeaderContainer, LogoContainer, Option, Options } from "./header.styles.jsx"

const Header = () => {
	const currentUser = useSelector(selectCurrentUser)
	const hidden = useSelector(selectCartHidden)

	return (
		<HeaderContainer>
			<LogoContainer to="/">
				<Logo />
			</LogoContainer>
			<Options>
				<Option>
					<Link to="/shop">SHOP</Link>
				</Option>
				<Option>
					<Link to="/shop">CONTACT</Link>
				</Option>
				{currentUser ? (
					<Option onClick={() => auth.signOut()}>SIGN OUT</Option>
				) : (
					<Option>
						<Link to="/signin">SIGN IN</Link>
					</Option>
				)}
				<CartIcon />
			</Options>
			{!hidden && <CartDropdown />}
		</HeaderContainer>
	)
}

export default Header
