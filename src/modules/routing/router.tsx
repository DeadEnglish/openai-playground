import { FunctionComponent } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuestionPage from "../questions/questions.page";

const Router: FunctionComponent = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<QuestionPage />} />
				{/* TODO: 404 page */}
				<Route path="*" element={<>404 m9</>} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
