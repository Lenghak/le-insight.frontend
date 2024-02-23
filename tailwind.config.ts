import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        xs: "425px",
        ...defaultTheme.screens,
      },
      fontFamily: {
        sans: ["Open Sans Variable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        informative: {
          DEFAULT: "hsl(var(--informative))",
          foreground: "hsl(var(--informative-foreground))",
          "50": "hsl(var(--informative-50))",
          "100": "hsl(var(--informative-100))",
          "200": "hsl(var(--informative-200))",
          "300": "hsl(var(--informative-300))",
          "400": "hsl(var(--informative-400))",
          "500": "hsl(var(--informative-500))",
          "600": "hsl(var(--informative-600))",
          "700": "hsl(var(--informative-700))",
          "800": "hsl(var(--informative-800))",
          "900": "hsl(var(--informative-900))",
          "950": "hsl(var(--informative-950))",
        },

        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
          "50": "hsl(var(--destructive-50))",
          "100": "hsl(var(--destructive-100))",
          "200": "hsl(var(--destructive-200))",
          "300": "hsl(var(--destructive-300))",
          "400": "hsl(var(--destructive-400))",
          "500": "hsl(var(--destructive-500))",
          "600": "hsl(var(--destructive-600))",
          "700": "hsl(var(--destructive-700))",
          "800": "hsl(var(--destructive-800))",
          "900": "hsl(var(--destructive-900))",
          "950": "hsl(var(--destructive-950))",
        },

        successive: {
          DEFAULT: "hsl(var(--successive))",
          foreground: "hsl(var(--successive-foreground))",
          "50": "hsl(var(--successive-50))",
          "100": "hsl(var(--successive-100))",
          "200": "hsl(var(--successive-200))",
          "300": "hsl(var(--successive-300))",
          "400": "hsl(var(--successive-400))",
          "500": "hsl(var(--successive-500))",
          "600": "hsl(var(--successive-600))",
          "700": "hsl(var(--successive-700))",
          "800": "hsl(var(--successive-800))",
          "900": "hsl(var(--successive-900))",
          "950": "hsl(var(--successive-950))",
        },

        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
          "50": "hsl(var(--warning-50))",
          "100": "hsl(var(--warning-100))",
          "200": "hsl(var(--warning-200))",
          "300": "hsl(var(--warning-300))",
          "400": "hsl(var(--warning-400))",
          "500": "hsl(var(--warning-500))",
          "600": "hsl(var(--warning-600))",
          "700": "hsl(var(--warning-700))",
          "800": "hsl(var(--warning-800))",
          "900": "hsl(var(--warning-900))",
          "950": "hsl(var(--warning-950))",
        },

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          "50": "hsl(var(--primary-50))",
          "100": "hsl(var(--primary-100))",
          "200": "hsl(var(--primary-200))",
          "300": "hsl(var(--primary-300))",
          "400": "hsl(var(--primary-400))",
          "500": "hsl(var(--primary-500))",
          "600": "hsl(var(--primary-600))",
          "700": "hsl(var(--primary-700))",
          "800": "hsl(var(--primary-800))",
          "900": "hsl(var(--primary-900))",
          "950": "hsl(var(--primary-950))",
        },

        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
