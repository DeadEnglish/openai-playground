import { Form } from "Formik";
import styled from "styled-components";

export const FormikForm = styled(Form)`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const FieldContainer = styled.div`
	label {
		font-size: ${({ theme }) => theme.fonts.sizes.title};
		font-weight: ${({ theme }) => theme.fonts.weights.medium};
		display: block;
		margin: 0 0 15px;
	}
`;
