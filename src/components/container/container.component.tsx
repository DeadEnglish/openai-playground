import { FunctionComponent, ReactNode } from "react";
import { Main } from "./container.styles";

interface IProps {
	children?: ReactNode;
}

const Container: FunctionComponent<IProps> = ({ children }) => {
	return <Main>{children}</Main>;
};

export default Container;
