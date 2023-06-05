/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				unifrakturCook: ["UnifrakturCook"],
				NanumBrush: ["Nanum Brush Script"],
			},
		},
	},
	plugins: [
		// eslint-disable-next-line no-undef
	],
};
