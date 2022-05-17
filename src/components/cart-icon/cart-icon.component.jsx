import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { toggleCartHidden } from "../../redux/cart/cart.actions"
import { selectCartItemsCount } from "../../redux/cart/cart.selectors"
import { CartIconContainer, ItemCount, ShoppingIconn } from "./cart-icon.styles.jsx"

const CartIcon = () => {
	const dispatch = useDispatch()
	const itemCount = useSelector(selectCartItemsCount)

	const handleClick = () => {
		dispatch(toggleCartHidden())
	}

	return (
		<CartIconContainer onClick={handleClick}>
			<ShoppingIconn />
			<ItemCount>{itemCount}</ItemCount>
		</CartIconContainer>
	)
}

export default CartIcon
