import React from "react"
import { useSelector } from "react-redux"
import CollectionItem from "../../components/collection-item/collection-item.component"
import { selectCollection } from "../../redux/shop/shop.selectors"
import { CollectionPageContainer, Title } from "./collection.styles.jsx"

const CollectionPage = ({ match }) => {
	const collection = useSelector(state => selectCollection(match.params.collectionId)(state))
	const { title, items } = collection

	return (
		<CollectionPageContainer>
			<Title>{title}</Title>
			<div className="row">
				{items.map(item => (
					<CollectionItem className="col-12 col-md-6 col-lg-4 col-xl-3" key={item.id} item={item} />
				))}
			</div>
		</CollectionPageContainer>
	)
}

export default CollectionPage
