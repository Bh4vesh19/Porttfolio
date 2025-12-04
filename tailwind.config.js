/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonBlue: '#00eaff',
        neonPurple: '#b400ff',
        electricCyan: '#03f4f4',
        hologramWhite: 'rgba(255,255,255,0.9)',
        bgBlack: '#000000',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
      boxShadow: {
        'neon-blue': '0 0 10px #00eaff, 0 0 20px #00eaff',
        'neon-purple': '0 0 10px #b400ff, 0 0 20px #b400ff',
      },
    },
  },
  plugins: [],
}
