/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/templates/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: 'var(--font-gugi)',
      },
      colors: {
        purple: {
          500: '#8C3578',
        },
        blue: {
          200: '#99C7F4',
          300: '#95C5F4',
          400: '#79B5F1',
        },
      },
      blur: {
        full: '194px',
      },
    },
  },
  plugins: [],
};
