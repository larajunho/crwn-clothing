import { Link } from "react-router-dom/cjs/react-router-dom.min"
import styled from "styled-components"

export const HeaderContainer = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;
`
export const LogoContainer = styled(Link)`
	height: 100%;
	width: 70px;
	padding: 10px;
	display: inline-flex;
	align-items: center;
`

export const Options = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`

export const Option = styled.div`
	&,
	a {
		padding: 10px 15px;
		cursor: pointer;
	}
`
