import { FunctionComponent } from "react";
import Theme from "./assets/theme/theme.component";
import Router from "./modules/routing/router";

const App: FunctionComponent = () => {
	return (
		<Theme>
			<Router />
		</Theme>
	);
};

export default App;
