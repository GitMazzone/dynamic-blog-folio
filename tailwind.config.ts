import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./utils/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
			},
		},
	},
	safelist: [
		{
			pattern: /(bg|text|hover:bg)-(pink|blue)-(50|100|200|800)/,
		},
		{
			pattern: /bg-(red|yellow|green|blue|purple|teal)-(200|300)/,
			variants: ['hover'],
		},
	],
	plugins: [],
};
export default config;
