import styled from "styled-components";

export const StyledFooter = styled.footer`
	margin: 0 0 45px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	align-items: center;
	justify-content: center;

	li {
		display: flex;
		justify-content: center;
		align-items: center;

		&:not(:last-child) {
			border-right: 1px solid ${({ theme }) => theme.brand.link};
			margin: 0 20px 0 0;
			padding: 0 20px 0 0;
		}

		a {
			display: flex;
			svg {
				color: ${({ theme }) => theme.brand.link};

				&:hover {
					color: ${({ theme }) => theme.brand.linkHover};
				}

				font-size: ${({ theme }) => theme.fonts.sizes.large};
			}
		}
	}
`;
