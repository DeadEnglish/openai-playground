import { Configuration, OpenAIApi } from "openai";
import { FunctionComponent, useRef, useState } from "react";
import Container from "../../components/container/container.component";

const QuestionPage: FunctionComponent = () => {
	const openAiConfiguration = new Configuration({
		apiKey: import.meta.env.VITE_OPENAI_KEY,
	});

	const openAi = new OpenAIApi(openAiConfiguration);

	const [explanation, setExplanation] = useState<string>();

	const [isLoading, setIsLoading] = useState<boolean>();

	const handleSubmit = async (topic: string) => {
		if (!openAi) {
			throw new Error("OpenAi isn't available at this time :(");
		}

		setIsLoading(true);

		try {
			const proposal = await openAi.createCompletion({
				model: "text-davinci-002",
				prompt: `created a detailed explanation targeted towards a child around the age of 5 about the following topic: ${topic}.`,
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

	const inputRef = useRef<HTMLInputElement>(null);

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
				<h2>Give me a topic</h2>
				<input name="topic" ref={inputRef} />
				<button
					onClick={() =>
						inputRef.current?.value &&
						handleSubmit(inputRef.current?.value)
					}
				>
					Get Proposal!
				</button>

				<div>{isLoading ? "loading..." : explanation}</div>
			</section>
		</Container>
	);
};

export default QuestionPage;
