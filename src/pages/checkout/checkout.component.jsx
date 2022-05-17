import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import CheckoutItem from "../../components/checkout-item/checkout-item.component"

import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors"
import { CheckoutPageContainer, CheckoutHeader, HeaderBlock, Total } from "./checkout.styles.jsx"

const CheckoutPage = ({ cartItems, total }) => (
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

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
})

export default connect(mapStateToProps)(CheckoutPage)
