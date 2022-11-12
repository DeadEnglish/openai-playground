import { Field, Formik } from "Formik";
import { Configuration, OpenAIApi } from "openai";
import { FunctionComponent, useState } from "react";
import Container from "../../components/container/container.component";
import Footer from "../../components/footer/footer.component";
import { createPrompt } from "./helpers/create-prompt.helper";
import { targetAudience } from "./helpers/target-audience.helper";
import {
	EAnswerStyle,
	EFormState,
	IQuestionFormValues,
} from "./question.types";
import {
	Actions,
	Button,
	Explanation,
	FieldContainer,
	FormikForm,
	FormSubmitted,
	Header,
} from "./questions.styles";

const QuestionPage: FunctionComponent = () => {
	const openAiConfiguration = new Configuration({
		apiKey: import.meta.env.VITE_OPENAI_KEY,
	});

	const openAi = new OpenAIApi(openAiConfiguration);

	const [explanation, setExplanation] = useState<string>();
	const [formState, setFormState] = useState<EFormState>(0);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [showForm, setShowForm] = useState<boolean>(false);
	const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);

	const handleSubmit = async (values: IQuestionFormValues) => {
		if (!openAi) {
			throw new Error("OpenAi isn't available at this time :(");
		}

		setIsLoading(true);
		setHasSubmitted(true);

		try {
			const proposal = await openAi.createCompletion({
				model: "text-davinci-002",
				prompt: createPrompt(
					values.topic,
					values.style,
					values.targetAudience
				),
				max_tokens: 1500,
			});

			setExplanation(proposal.data.choices[0].text);

			setIsLoading(false);
		} catch (error) {
			if (!error) {
				return;
			}
			console.log(error);

			setIsLoading(false);
		}
	};

	const handleReset = (resetForm: () => void) => {
		resetForm();
		setIsLoading(false);
		setHasSubmitted(false);
		setFormState(0);
	};

	const initialValues: IQuestionFormValues = {
		topic: "",
		style: EAnswerStyle.friendly,
		targetAudience: targetAudience.fiveYearOld,
		maxLength: 0,
	};

	return (
		<Container>
			<Header>
				<h1>Explainanator</h1>
				{!showForm && (
					<>
						<p>
							Want to explain something but cba to do it? try
							this!
						</p>

						<Button
							onClick={() => {
								setShowForm(true);
							}}
						>
							Lets get started
						</Button>
					</>
				)}
			</Header>
			{showForm && (
				<Formik initialValues={initialValues} onSubmit={handleSubmit}>
					{({ resetForm, values }) => (
						<FormikForm>
							{!hasSubmitted && (
								<FieldContainer>
									{formState === EFormState.topic && (
										<>
											<label htmlFor="topic">
												what's your topic?
											</label>
											<Field
												name="topic"
												id="topic"
												type="input"
											/>
										</>
									)}
									{formState === EFormState.audience && (
										<>
											<label htmlFor="targetAudience">
												Who are you explaining it to?
											</label>
											<Field
												name="targetAudience"
												id="targetAudience"
												as="select"
											>
												<option value="">
													Please select
												</option>
												{Object.entries(
													targetAudience
												).map(([key, value]) => (
													<option
														key={key}
														value={value}
													>
														{key
															.split(/(?=[A-Z])/)
															.join(" ")}
													</option>
												))}
											</Field>
										</>
									)}
									{formState === EFormState.style && (
										<>
											<label htmlFor="style">
												Choose a style for your response
											</label>
											<Field
												name="style"
												id="style"
												as="select"
											>
												<option value="">
													Please select
												</option>
												{(
													Object.keys(
														EAnswerStyle
													) as Array<
														keyof typeof EAnswerStyle
													>
												).map((key) => (
													<option
														key={key}
														value={key}
													>
														{key
															.split(/(?=[A-Z])/)
															.join(" ")}
													</option>
												))}
											</Field>
										</>
									)}
									<Actions>
										{formState !== EFormState.topic && (
											<Button
												type="button"
												onClick={() =>
													setFormState(formState - 1)
												}
											>
												back a step
											</Button>
										)}
										{formState < EFormState.style && (
											<Button
												type="button"
												onClick={() =>
													setFormState(formState + 1)
												}
											>
												Continue
											</Button>
										)}
										{formState === EFormState.style && (
											<Button type="submit">
												Get explanation!
											</Button>
										)}
									</Actions>
								</FieldContainer>
							)}
							{hasSubmitted && (
								<>
									<FormSubmitted>
										<h2>
											Looks like you want me to explain{" "}
											{values.topic}, here it goes...
										</h2>
									</FormSubmitted>
									<Explanation>
										{isLoading ? (
											"loading..."
										) : (
											<p>{explanation}</p>
										)}
										{!isLoading && (
											<Button
												type="button"
												onClick={() =>
													handleReset(resetForm)
												}
											>
												Want another explanation?
											</Button>
										)}
									</Explanation>
								</>
							)}
						</FormikForm>
					)}
				</Formik>
			)}
			<Footer />
		</Container>
	);
};

export default QuestionPage;
