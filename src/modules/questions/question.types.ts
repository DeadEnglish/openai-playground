export enum EFormState {
	topic,
	audience,
	style,
	length,
}

export enum EAnswerStyle {
	sarcastic = "sarcastic",
	silly = "silly",
	friendly = "friendly",
	professional = "professional",
}

export enum ETargetAudience {
	fiveYearOld = "a child around the age of 5",
	collegeLevel = "an 18 - 25 year old with a college level education",
	middleAged = "a 30 to 50 year old adult who has a fair bit of knowledge",
	oldAged = "a 60 plus year old adult who has hearing problems",
}

export interface IQuestionFormValues {
	topic: string;
	style: EAnswerStyle;
	targetAudience: ETargetAudience;
	maxLength: number;
}
