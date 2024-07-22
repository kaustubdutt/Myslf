/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mint: '#98FF98',
        light_orange: 'rgba(253,166,20,1)',
        crimson_red: '#B22222',
      },
      boxShadow: {
        'custom': '0 4px 18px #a955f718, 0 6px 30px #a955f718',
        'custom-hover': '0 4px 16px rgba(255,0,182,0.55), 0 6px 30px rgba(255,0,182,0.55)'
      },
    },
  },
  plugins: [],
};
