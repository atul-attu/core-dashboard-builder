/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            screens: {
                "max-w-1535": { max: "1535px" },
                // => @media (max-width: 1535px) { ... }

                "max-w-1279": { max: "1279px" },
                // => @media (max-width: 1279px) { ... }

                "max-w-1023": { max: "1023px" },
                // => @media (max-width: 1023px) { ... }

                "max-w-991": { max: "991px" },
                // => @media (max-width: 991px) { ... }

                "max-w-767": { max: "767px" },
                // => @media (max-width: 767px) { ... }

                "max-w-639": { max: "639px" },
                // => @media (max-width: 639px) { ... }
            },
        },
    },
    plugins: [],
};
