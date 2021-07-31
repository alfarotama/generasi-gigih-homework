module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				sptf_primary: "#1ED760",
				sptf_main: "#000000",
				sptf_card: "#2B2B2B",
				sptf_card_hover: "#383838",

				sptf_dark: "#242526",
				sptf_dark_half: "#4C4C4D",
				sptf_dark_quarter: "#737373",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
