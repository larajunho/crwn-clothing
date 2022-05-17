import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { withRouter } from "react-router-dom"
import { toggleCartHidden } from "../../redux/cart/cart.actions"
import { selectCartItems } from "../../redux/cart/cart.selectors"
import CartItem from "../cart-item/cart-item.component"
import CustomButton from "../custom-button/custom-button.component"
import { CartDropdownContainer, CartItems, EmptyMessage } from "./cart-dropdown.styles.jsx"

const CartDropdown = ({ history }) => {
	const cartItems = useSelector(selectCartItems)
	const dispatch = useDispatch()

	return (
		<CartDropdownContainer>
			<CartItems>
				{cartItems.length ? (
					cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
				) : (
					<EmptyMessage> Your cart is empty</EmptyMessage>
				)}
			</CartItems>
			<CustomButton
				onClick={() => {
					history.push("/checkout")
					dispatch(toggleCartHidden())
				}}
			>
				GO TO CHECKOUT{" "}
			</CustomButton>
		</CartDropdownContainer>
	)
}

export default withRouter(CartDropdown)
