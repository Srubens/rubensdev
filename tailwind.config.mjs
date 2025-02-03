/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
  		'@tablet': '640px',
  		'@laptop': '1024px',
  		'@desktop': '1280px'
  	},
    extend: {
      fontFamily: {
  			inter: 'var(--font-inter)',
  			poppins: 'var(--font-poppins)'
  		},
      colors: {
        'purple-light':'#CCBEFF',
        'purple-primary':'#653DF5',
        'purple-dark':'#4D1CFF',
        'gray-primary': '#f6f6f6',
        'gray-900': '#030E15',
        'gray-800': '#2D3235',
        'gray-700': '#4F5152',
        'gray-600': '#78797A',
        'gray-500': '#9A9D9E',
        'gray-400': '#BABCBD',
        'gray-300': '#C6C7C8',
        'gray-200': '#DADCDD',
        'gray-100': '#f6f6f6',
      },
      maxWidth:{
        grid:'78.125rem',
        'tag-icon':'13.43rem',
        'card-difeerence':'17rem',
        'mini-card':'fit-content',
        'maxlogo':'13rem',
      },
      width:{
        'header-grid':'33.18rem',
        'cardhero':'40.31rem',
        'cardabout':'39.12rem',
        'cardtext':'32.5rem',
        'aboutImage':'30.5rem',
        'cardslide':'42.18rem',
      },
      keyframes:{
        slide:{
          "from": { transform: "translateX(-28%)" }, // Começa fora da tela à direita
          "to": { transform: "translateX(0)" }, // 
        },
        blink: {
          "50%": { opacity: "0" },
        },
      },
      animation: {
        slide: "slide 23s linear infinite", // Define a animação com duração e repetição infinita
        blink: "blink 1s steps(2, start) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
