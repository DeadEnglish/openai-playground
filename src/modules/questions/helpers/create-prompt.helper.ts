import { EAnswerStyle, ETargetAudience } from "../question.types";

export const createPrompt = (
	topic: string,
	answerStyle: EAnswerStyle,
	targetAudience: ETargetAudience
): string =>
	`created a detailed explanation with a ${answerStyle} tone targeted towards ${targetAudience} about the following topic: ${topic}.`;
