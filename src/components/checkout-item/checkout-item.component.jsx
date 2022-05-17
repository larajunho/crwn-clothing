import React from "react"

import { connect } from "react-redux"
import { clearItemFromCart, addItem, removeItem } from "../../redux/cart/cart.actions"
import {
	CheckoutItemContainer,
	ImageContainer,
	Info,
	Quantity,
	Value,
	Arrow,
	RemoveButton,
} from "./checkout-item.styles.jsx"

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
	const { name, imageUrl, price, quantity } = cartItem
	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt="item" />
			</ImageContainer>
			<Info>{name}</Info>
			<Quantity>
				<Arrow onClick={() => removeItem(cartItem)}>&#10094;</Arrow>
				<Value> {quantity}</Value>
				<Arrow onClick={() => addItem(cartItem)}>&#10095;</Arrow>
			</Quantity>
			<Info>{price}</Info>
			<RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
		</CheckoutItemContainer>
	)
}

const mapDispatchToProps = dispatch => ({
	clearItem: item => dispatch(clearItemFromCart(item)),
	addItem: item => dispatch(addItem(item)),
	removeItem: item => dispatch(removeItem(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
