import React from "react"

import { ItemDetails, CartItemContainer, Name } from "./cart-item.styles.jsx"

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
	<CartItemContainer>
		<img src={imageUrl} alt="item" />
		<ItemDetails>
			<Name> {name}</Name>
			<span className="price">
				{quantity} x ${price}
			</span>
		</ItemDetails>
	</CartItemContainer>
)

export default CartItem
