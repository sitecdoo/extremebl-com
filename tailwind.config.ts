import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "league-spartan": ["var(--font-league-spartan)"],
        "open-sans": ["var(--font-sans)"],
      },
      screens: {
        "3xl": "1728px",
      },
      lineHeight: {
        "11": "2.625rem",
        "12": "3.125rem",
        "13": "3.75rem",
        "14": "4rem",
        "15": "6.75rem",
        "16": "8.125rem",
      },
      fontSize: {
        "2.5xl": "1.75rem",
        "3.5xl": "2rem",
        "4.5xl": "2.625rem",
        "5.5xl": "3.375rem",
        "6xl": "3.5rem",
        "6.5xl": "4rem",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
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
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        neutrals: {
          900: "#151411",
          800: "#2E2D2A",
          700: "#484744",
          600: "#61605D",
          500: "#7B7A77",
          400: "#949390",
          300: "#ADACA9",
          200: "#DCD9D1",
          100: "#ECEAE5",
          75: "#F3F2ED",
          50: "#FAF9F6",
        },
        blue: {
          700: "#1E4850",
          600: "#38626A",
          500: "#517B83",
          400: "#62888F",
          300: "#74959C",
          200: "#84AEB6",
          100: "#B5CED3",
          50: "#D2E3E7",
        },
        yellow: {
          800: "#9D8917",
          700: "#BAA429",
          600: "#D2BC3E",
          500: "#ECD658",
          400: "#F3E078",
        },
        orange: {
          500: "#EB9A2F",
          400: "#F6BB6D",
        },
        purple: {
          500: "#C8BEE7",
          400: "#D3CBEB",
        },
        dark: {
          500: "#393939",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        18: "1.125rem",
        20: "1.25rem",
        28: "1.75rem",
        40: "2.5rem",
        60: "3.75rem",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
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
export default config;
