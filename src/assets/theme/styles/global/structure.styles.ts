import { css } from "styled-components";

const globalStructure = css`
	html {
		font-family: ${({ theme }) => theme.fonts.family};
		font-size: 100%;
	}

	body {
		margin: 0;
		line-height: ${({ theme }) => theme.fonts.lineHeight.base};
		font-weight: ${({ theme }) => theme.fonts.weights.default};
		font-size: ${({ theme }) => theme.fonts.sizes.standard};
		font-family: ${({ theme }) => theme.fonts.family};
		background: ${({ theme }) => theme.brand.background};
		color: ${({ theme }) => theme.brand.text};
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		input,
		select,
		textarea,
		button {
			font-family: ${({ theme }) => theme.fonts.family};
			color: ${({ theme }) => theme.brand.text};
			background: none;
			color: inherit;
			border: none;
			padding: 0;
			font: inherit;
			outline: inherit;
		}

		button {
			cursor: pointer;
		}
	}

	* {
		box-sizing: border-box;
	}
`;

export default globalStructure;
