/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primaryButton: "#6EC2A8",
                secondaryButton: "#CCCCCC",
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
