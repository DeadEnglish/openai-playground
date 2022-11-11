import { FunctionComponent } from "react";
import {
	createGlobalStyle,
	DefaultTheme,
	Interpolation,
	ThemedStyledProps,
} from "styled-components";
import globalStructure from "./structure.styles";

export interface IGlobalStyleProps {
	styles?: Interpolation<ThemedStyledProps<unknown, DefaultTheme>>;
}

export const GlobalStyle: FunctionComponent<IGlobalStyleProps> = ({
	styles,
}) => {
	const Style = createGlobalStyle`
		${globalStructure}
		${styles}
	`;

	return <Style />;
};
