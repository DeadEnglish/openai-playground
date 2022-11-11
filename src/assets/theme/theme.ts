export const theme = {
	brand: {
		black: "#000000",
		white: "#ffffff",
		body: "#EDEEF2",
		neutral: "#f2f2f2",
		neutralLight: "#fefefe",
		fail: "#e4251b",
		borders: "#b7b7b7",
		text: "#e3e3e3",
		primary: "#116DFF",
		secondary: "#5AF091",
		tertiary: "#5E6A8A",
		background: "#242424",
	},
	fonts: {
		family: '"Work Sans",sans-serif, arial, helvetica',
		sizes: {
			base: "16px",
			standard: ".875rem",
			small: ".75rem",
			smallest: ".625rem",
			med: ".1rem",
			large: "1.25rem",
			title: "1.5rem",
			heroTitle: "2.5rem",
			h1: "1.625rem",
			h2: "1.25rem",
			get h3() {
				return this.large;
			},
			h4: "1rem",
		},
		weights: {
			light: 300,
			regular: 400,
			medium: 500,
			semibold: 600,
			bold: 700,
		},
		lineHeight: {
			small: 1,
			base: 1.5,
			med: 1.7,
			large: 2,
		},
	},
	structure: {
		container: {
			maxWidth: "1080px",
			mobileWidth: "100%",
			mobilePadding: "15px",
		},
	},
};

export type TTheme = typeof theme;
