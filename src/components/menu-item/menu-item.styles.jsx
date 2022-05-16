import styled from "styled-components"
import { MenuItem } from "./menu-item.compenent"
export const BackgroundImage = styled.div`
	width: 100%;
	height: 100%;
	background-position: center;
	background-size: cover;
	background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`
export const Content = styled.div`
	height: 90px;
	padding: 0 25px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	background-color: white;
	opacity: 0.7;
	position: absolute;

	h2 {
		font-weight: bold;
		margin-bottom: 6px;
		font-size: 22px;
		color: #4a4a4a;
	}

	p {
		font-weight: lighter;
		font-size: 16px;
	}
`

export const MenuItemm = styled.div`
	height: 240px;
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	overflow: hidden;
	padding: 0;
	menu-item: ${({ className }) => `menu-item(${className})`};
	&:hover {
		cursor: pointer;

		& ${BackgroundImage} {
			transform: scale(1.1);
			transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		}

		& ${Content} {
			opacity: 0.9;
		}
	}
`
