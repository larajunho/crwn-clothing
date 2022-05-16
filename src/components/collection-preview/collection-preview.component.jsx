import React from "react"
import CollectionItem from "../collection-item/collection-item.component"
import "./collection-preview.styles.scss"

const CollectionPreview = ({ title, items }) => (
	<div className="collection-preview">
		<h1 className="title">{title.toUpperCase()}</h1>
		<div className="preview row">
			{items
				.filter((item, idx) => idx < 4)
				.map(item => (
					<CollectionItem className="col-12 col-md-6 col-lg-4 col-xl-3 mb-3" key={item.id} item={item} />
				))}
		</div>
	</div>
)
export default CollectionPreview
