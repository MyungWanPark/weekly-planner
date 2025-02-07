import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                startBtn: "#0F66DE",
                lightGrey: "#FAFAFB",
                semiDarkGrey: "#D9D9D9",
            },
        },
    },
    plugins: [],
} satisfies Config;
