import React from "react"
import { useDispatch } from "react-redux"
import { addItem as _addItem, clearItemFromCart, removeItem as _removeItem } from "../../redux/cart/cart.actions"
import {
	Arrow,
	CheckoutItemContainer,
	ImageContainer,
	Info,
	Quantity,
	RemoveButton,
	Value,
} from "./checkout-item.styles.jsx"

const CheckoutItem = ({ cartItem }) => {
	const dispatch = useDispatch()
	const { name, imageUrl, price, quantity } = cartItem

	const clearItem = item => dispatch(clearItemFromCart(item))

	const addItem = item => dispatch(_addItem(item))

	const removeItem = item => dispatch(_removeItem(item))

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

export default CheckoutItem
