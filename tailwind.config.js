/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },
      animation: {
        "loader-outter":
          "loader-outter 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite",
        "loader-inner":
          "loader-inner 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite",
        dash: "dash 1s linear infinite",
      },
    },
  },
  plugins: [],
};
