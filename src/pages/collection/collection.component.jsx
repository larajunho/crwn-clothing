import React from "react"
import { connect } from "react-redux"
import CollectionItem from "../../components/collection-item/collection-item.component"
import { selectCollection } from "../../redux/shop/shop.selectors"
import "./collection.styles.scss"

const CollectionPage = ({ collection }) => {
	const { title, items } = collection
	return (
		<div className="collection-page">
			<h2 className="title">{title} </h2>
			<div className="items row">
				{items.map(item => (
					<CollectionItem className="col-12 col-md-6 col-lg-4 col-xl-3" key={item.id} item={item} />
				))}
			</div>
		</div>
	)
}

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state),
})

export default connect(mapStateToProps)(CollectionPage)
