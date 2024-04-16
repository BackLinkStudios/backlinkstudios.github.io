import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            'xs': '320px',
            'sm': '576px',
            'md': '768px',
            'lg': '992px',
            'xl': '1200px',
            'xxl': '1400px',

            'min-xs': '320px',
            'min-sm': '576px',
            'min-md': '768px',
            'min-lg': '992px',
            'min-xl': '1200px',
            'min-xxl': '1400px',

            'max-xs': {'max': '319.98px'},
            'max-sm': {'max': '575.98px'},
            'max-md': {'max': '767.98px'},
            'max-lg': {'max': '991.98px'},
            'max-xl': {'max': '1199.98px'},
            'max-xxl': {'max': '1399.98px'},
        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--_._gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--_._gradient-stops))",
            },
        },
    },
    plugins: [],
    prefix: '_._',
};
export default config;
