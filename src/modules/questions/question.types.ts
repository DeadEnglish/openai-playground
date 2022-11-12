export enum EFormState {
	topic,
	audience,
	style,
}

export enum EAnswerStyle {
	sarcastic = "sarcastic",
	silly = "silly",
	friendly = "friendly",
	professional = "professional",
}

export interface IQuestionFormValues {
	topic: string;
	style: EAnswerStyle;
	targetAudience: string;
	maxLength: number;
}
