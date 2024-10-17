/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#6EC2A8",
                textPrimary: "#2B2B2B",
                textSubtle: "#A9A9A9",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
