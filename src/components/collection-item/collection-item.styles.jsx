import styled from "styled-components"
import { CustomButtonWrapper } from "../custom-button/custom-button.styles"

export const Image = styled.div`
	width: 100%;
	height: 95%;
	background-size: cover;
	background-position: center;
	margin-bottom: 5px;
`

export const CollectionFooter = styled.div`
	padding: 0 0.5rem;
	width: 100%;
	height: calc(1rem + 5%);
	display: flex;
	justify-content: space-between;
	font-size: 18px;
`

export const Name = styled.span`
	width: 90%;
	margin-bottom: 15px;
`

export const Price = styled.span`
	width: 10%;
`

export const CollectionItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 350px;
	align-items: center;
	position: relative;
	padding: 0.5rem;

	&:hover {
		${Image} {
			opacity: 0.8;
		}
		${CustomButtonWrapper} {
			opacity: 0.85;
			display: flex;
		}
	}

	${CustomButtonWrapper} {
		width: 80%;
		opacity: 0.7;
		position: absolute;
		top: 230px;
		display: none;
	}
`
