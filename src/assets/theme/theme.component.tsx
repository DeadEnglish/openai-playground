import { FunctionComponent, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global/global.styles";
import { theme } from "./theme";

interface IThemeProps {
	children: ReactNode;
}

const Theme: FunctionComponent<IThemeProps> = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			{children}
		</ThemeProvider>
	);
};

export default Theme;
