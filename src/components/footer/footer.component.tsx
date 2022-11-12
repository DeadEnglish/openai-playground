import { FunctionComponent } from "react";
import { FiCoffee, FiGithub } from "react-icons/fi";
import { List, StyledFooter } from "./footer.styles";

const Footer: FunctionComponent = () => {
	return (
		<StyledFooter>
			<List>
				<li>
					<a
						href="https://github.com/DeadEnglish"
						target="_blank"
						rel="noopener"
						aria-label="Github link"
					>
						<FiGithub />
					</a>
				</li>
				<li>
					<a
						href="https://www.buymeacoffee.com/DeadEnglish"
						target="_blank"
						rel="noopener"
						aria-label="Buy me a coffee link"
					>
						<FiCoffee />
					</a>
				</li>
			</List>
		</StyledFooter>
	);
};

export default Footer;
