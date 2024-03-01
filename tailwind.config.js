/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "landing-banner": "url('../public/assets/banner-bg.jpg')",
      },
      backgroundOpacity: {
        50: "0.5",
      },
    },
  },
  plugins: [],
};
