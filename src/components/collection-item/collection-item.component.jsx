import React from "react"
import { useDispatch } from "react-redux"
import { addItem as _addItem } from "../../redux/cart/cart.actions"
import CustomButton from "../custom-button/custom-button.component"
import { CollectionFooter, CollectionItemContainer, Image, Name, Price } from "./collection-item.styles.jsx"

const CollectionItem = ({ item, className = "" }) => {
	const dispatch = useDispatch()

	const { name, price, imageUrl } = item

	const addItem = item => {
		dispatch(_addItem(item))
	}

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

export default CollectionItem
