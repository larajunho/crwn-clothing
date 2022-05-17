import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import { selectDirectorySections } from "../../redux/directory/directory.selectors"
import MenuItem from "../menu-item/menu-item.compenent"
import { DirectoryMenu } from "./directory.styles.jsx"

const Directory = ({ sections }) => (
	<DirectoryMenu className="row">
		{sections.map(({ id, ...otherSectionProps }) => (
			<div key={id} className="col-12 col-md-6 col-lg-4 mb-3">
				<MenuItem {...otherSectionProps} />
			</div>
		))}
	</DirectoryMenu>
)

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections,
})
export default connect(mapStateToProps)(Directory)
