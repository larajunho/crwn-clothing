import React from "react"
import { withRouter } from "react-router-dom"
import { BackgroundImage, Content, MenuItemm } from "./menu-item.styles.jsx"

const MenuItem = ({ title, imageUrl, history, linkUrl, match, className = "" }) => (
	<MenuItemm className={className} onClick={() => history.push(`${match.url}${linkUrl}`)}>
		<BackgroundImage imageUrl={imageUrl} />
		<Content>
			<h2>{title.toUpperCase()} </h2>
			<p>SHOP NOW</p>
		</Content>
	</MenuItemm>
)

export default withRouter(MenuItem)
