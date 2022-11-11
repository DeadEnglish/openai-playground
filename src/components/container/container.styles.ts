import styled from "styled-components";

export const Main = styled.main`
	width: ${(props) => props.theme.structure.container.mobileWidth};
	max-width: ${(props) => props.theme.structure.container.maxWidth};
	padding: 0 ${(props) => props.theme.structure.container.mobilePadding};
`;
