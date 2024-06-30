/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mint: '#98FF98', light_orange: 'rgba(253,166,20,1)', crimson_red: '#B22222', 'mint': '#98ff98', // Example custom color
        'light-orange': 'rgba(253,166,20,1)',
      },
      
    },
  },
  plugins: [],
};
