/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      primary: {
        light: "#6b7280",
        DEFAULT: "#FFFFFF",
        black: "#040404",
      },
      secondary: {
        light: "#6b7280", // Gray for text
        DEFAULT: "#4b5563", // Secondary buttons
        dark: "#374151", // Darker shades
      },
      accent: "#10b981", // Green for success messages
      error: "#ef4444", // Red for errors
      background: "#f3f4f6",
      white: "#ffffff",
      black: "#000000",
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Main font for text
        display: ["Poppins", "sans-serif"], // Headings or product titles
      },
      extend: {
        fontSize: {
          xs: ["0.75rem", { lineHeight: "1rem" }],
          "5xl": ["3rem", { lineHeight: "1.1" }],
        },
        borderRadius: {
          xl: "1rem",
          "2xl": "1.5rem",
        },
        boxShadow: {
          card: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          button: "0 2px 4px rgba(0, 0, 0, 0.15)",
        },
      },
    },
    plugins: [],
  },
};
