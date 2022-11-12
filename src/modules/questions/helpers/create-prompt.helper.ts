import { EAnswerStyle } from "../question.types";

export const createPrompt = (
	topic: string,
	answerStyle: EAnswerStyle,
	targetAudience: string
): string =>
	`created a detailed explanation with a ${answerStyle} tone targeted towards ${targetAudience} about the following topic: ${topic}.`;
