import { Field, Formik } from "Formik";
import { Configuration, OpenAIApi } from "openai";
import { FunctionComponent, useState } from "react";
import Container from "../../components/container/container.component";
import { createPrompt } from "./helpers/create-prompt.helper";
import {
	EAnswerStyle,
	ETargetAudience,
	IQuestionFormValues,
} from "./question.types";
import { FieldContainer, FormikForm } from "./questions.styles";

const QuestionPage: FunctionComponent = () => {
	const openAiConfiguration = new Configuration({
		apiKey: import.meta.env.VITE_OPENAI_KEY,
	});

	const openAi = new OpenAIApi(openAiConfiguration);

	const [explanation, setExplanation] = useState<string>();
	const [formState, setFormState] = useState<EFormState>(0);

	const [isLoading, setIsLoading] = useState<boolean>();

	const handleSubmit = async (values: IQuestionFormValues) => {
		if (!openAi) {
			throw new Error("OpenAi isn't available at this time :(");
		}

		let calculation = (1500 / 100) * values.maxLength;
		if (calculation < 256) calculation = 256;

		setIsLoading(true);

		try {
			const proposal = await openAi.createCompletion({
				model: "text-davinci-002",
				prompt: createPrompt(
					values.topic,
					values.style,
					values.targetAudience
				),
				max_tokens: values.maxLength,
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

	const initialValues: IQuestionFormValues = {
		topic: "",
		style: EAnswerStyle.friendly,
		targetAudience: ETargetAudience.fiveYearOld,
		maxLength: 0,
	};

	return (
		<Container>
			<header>
				<h1>ELI5</h1>
				<p>
					Ever felt dumb? throw me a topic and I'll Explain it like a
					toddler!
				</p>
			</header>

			<section>
				<Formik initialValues={initialValues} onSubmit={handleSubmit}>
					{() => (
						<FormikForm>
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
											{(
												Object.keys(
													ETargetAudience
												) as Array<
													keyof typeof ETargetAudience
												>
											).map((key) => (
												<option key={key} value={key}>
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
												<option key={key} value={key}>
													{key
														.split(/(?=[A-Z])/)
														.join(" ")}
												</option>
											))}
										</Field>
									</>
								)}
								{formState === EFormState.length && (
									<>
										<label htmlFor="maxLength">
											Set the length of response
										</label>
										<Field
											name="maxLength"
											id="maxLength"
											type="range"
											min="0"
											max="100"
											step="5"
										/>
									</>
								)}

								{formState !== EFormState.topic && (
									<button
										type="button"
										onClick={() =>
											setFormState(formState - 1)
										}
									>
										back a step
									</button>
								)}
								{formState < EFormState.length && (
									<button
										type="button"
										onClick={() =>
											setFormState(formState + 1)
										}
									>
										Continue
									</button>
								)}
								{formState === EFormState.length && (
									<button type="submit">
										Get explanation!
									</button>
								)}
							</FieldContainer>
						</FormikForm>
					)}
				</Formik>
				<div>{isLoading ? "loading..." : explanation}</div>
			</section>
		</Container>
	);
};

export default QuestionPage;
