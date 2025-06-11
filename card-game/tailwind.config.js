/** @type {import('tailwindcss').Config} */
export default {
	content: [
	  "./index.html", // ← tu l'as bien à la racine
	  "./src/**/*.{js,ts,jsx,tsx}", // ← tous tes composants sont dans src
	],
	theme: {
	  extend: {},
	},
	plugins: [],
  }
