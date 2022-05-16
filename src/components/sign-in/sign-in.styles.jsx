import styled from "styled-components"

export const Buttonns = styled.div`
	display: flex;
	justify-content: space-between;
`

export const SignInn = styled.div`
	display: flex;
	flex-direction: column;
	h2 {
		margin: 10px 0;
	}

	& ${Buttonns} {
		display: flex;
		justify-content: space-between;
	}
`
