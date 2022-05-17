import React from "react"
import { useSelector } from "react-redux"
import CheckoutItem from "../../components/checkout-item/checkout-item.component"
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors"
import { CheckoutHeader, CheckoutPageContainer, HeaderBlock, Total } from "./checkout.styles.jsx"

const CheckoutPage = () => {
	const cartItems = useSelector(selectCartItems)
	const total = useSelector(selectCartTotal)

	return (
		<CheckoutPageContainer>
			<CheckoutHeader>
				<HeaderBlock>
					<span>Product</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Description</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Quantity</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Price</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Remove</span>
				</HeaderBlock>
			</CheckoutHeader>
			{cartItems.map(cartItem => (
				<CheckoutItem key={cartItem.id} cartItem={cartItem} />
			))}
			<Total>
				<span> TOTAL: ${total}</span>
			</Total>
		</CheckoutPageContainer>
	)
}

export default CheckoutPage
