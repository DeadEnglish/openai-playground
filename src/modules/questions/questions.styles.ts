import { Form } from "formik";
import styled from "styled-components";

export const Header = styled.header`
	width: 100%;
	max-width: 800px;
	margin: 45px auto 0;
	display: flex;
	align-items: center;
	flex-direction: column;

	h1 {
		margin: 0 0 20px;
	}

	p {
		margin: 0;
		font-size: ${({ theme }) => theme.fonts.sizes.large};
	}

	button {
		margin: 15px 0 0;
		max-width: 275px;
	}
`;

export const FormikForm = styled(Form)`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	max-width: 800px;
	margin: 0 auto;
`;

export const FieldContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;

	label {
		font-size: ${({ theme }) => theme.fonts.sizes.title};
		font-weight: ${({ theme }) => theme.fonts.weights.medium};
		display: block;
		margin: 0 0 25px;
	}

	input,
	select {
		padding: 8px;
		border-bottom: 1px solid ${({ theme }) => theme.brand.border};
		font-size: ${({ theme }) => theme.fonts.sizes.large};
		background: none;
		min-width: 250px;
	}
`;

export const Actions = styled.div`
	width: 100%;
	margin: 45px 0 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 20px;
`;

export const Button = styled.button`
	width: 100%;
	padding: 8px 12px;
	border: 1px solid black;
	box-shadow: 4px 4px 0px 0px rgba(0, 0, 0, 0.75);
`;

export const FormSubmitted = styled.div`
	h2 {
		margin: 0 0 25px;
	}
`;

export const Explanation = styled.section`
	text-align: center;

	button {
		margin: 0 auto;
		max-width: 250px;
	}
`;
