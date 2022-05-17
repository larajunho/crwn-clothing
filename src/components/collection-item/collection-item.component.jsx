import React from "react"
import { connect } from "react-redux"
import { addItem } from "../../redux/cart/cart.actions"
import CustomButton from "../custom-button/custom-button.component"
import { CollectionFooter, CollectionItemContainer, Image, Name, Price } from "./collection-item.styles.jsx"

const CollectionItem = ({ item, addItem, className = "" }) => {
	const { name, price, imageUrl } = item

	return (
		<CollectionItemContainer className={`collection-item ${className}`}>
			<Image
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			<CollectionFooter>
				<Name>{name}</Name>
				<Price>{price}</Price>
			</CollectionFooter>
			<CustomButton onClick={() => addItem(item)} inverted>
				{" "}
				Add to cart
			</CustomButton>
		</CollectionItemContainer>
	)
}

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item)),
})

export default connect(null, mapDispatchToProps)(CollectionItem)
