import React from "react"
import CollectionItem from "../collection-item/collection-item.component"
import { CollectionPreviewContainer, Title, Preview } from "./collection-preview.styles.jsx"

const CollectionPreview = ({ title, items }) => (
	<CollectionPreviewContainer>
		<Title>{title.toUpperCase()}</Title>
		<Preview className="row">
			{items
				.filter((item, idx) => idx < 4)
				.map(item => (
					<CollectionItem className="col-12 col-md-6 col-lg-4 col-xl-3 mb-3" key={item.id} item={item} />
				))}
		</Preview>
	</CollectionPreviewContainer>
)
export default CollectionPreview
