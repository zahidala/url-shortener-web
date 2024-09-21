import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	plugins: [],
	theme: {
		extend: {
			animation: {
				fade: "fadeIn .2s ease-in-out",
			},
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				navy: {
					"50": "#e6e6ff",
					"100": "#ccccff",
					"200": "#9999ff",
					"300": "#6666ff",
					"400": "#3333ff",
					"500": "#0000ff",
					"600": "#0000cc",
					"700": "#000099",
					"800": "#000066",
					"900": "#000033",
					DEFAULT: "#000080",
				},
			},
		},
		keyframes: {
			fadeIn: {
				from: { opacity: "0" },
				to: { opacity: "1" },
			},
		},
	},
};
export default config;
