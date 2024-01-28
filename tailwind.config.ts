import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				lightCyan: 'hsl(193, 38%, 86%)',
				neonGreen: 'hsl(150, 100%, 66%)',
				grayishBlue: 'hsl(217, 19%, 38%)',
				darkgrayishblue: 'hsl(217, 19%, 24%)',
				darkblue: 'hsl(218, 23%, 16%)',
			},
			dropShadow: {
				glow: [
					'0 0px 15px hsl(150, 100%, 66%)',
					'0 0px 25px hsla(150, 100%, 66%, 0.2)',
				],
			},
		},
	},
	plugins: [],
};
export default config;
