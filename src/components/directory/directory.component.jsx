import React from "react"
import { useSelector } from "react-redux"
import { selectDirectorySections } from "../../redux/directory/directory.selectors"
import MenuItem from "../menu-item/menu-item.compenent"
import { DirectoryMenu } from "./directory.styles.jsx"

const Directory = () => {
	const sections = useSelector(selectDirectorySections)

	return (
		<DirectoryMenu className="row">
			{sections.map(({ id, ...otherSectionProps }) => (
				<div key={id} className="col-12 col-md-6 col-lg-4 mb-3">
					<MenuItem {...otherSectionProps} />
				</div>
			))}
		</DirectoryMenu>
	)
}
export default Directory
