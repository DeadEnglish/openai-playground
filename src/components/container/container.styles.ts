import styled from "styled-components";

export const Main = styled.main`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	width: ${(props) => props.theme.structure.container.mobileWidth};
	max-width: ${(props) => props.theme.structure.container.maxWidth};
	padding: 0 ${(props) => props.theme.structure.container.mobilePadding};
	margin: 0 auto;
	height: 100vh;
`;
