/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
  ],
  theme: {
    extend: {
      colors: {
        axionova: {
          orange: "#FF6A00", // Naranja corporativo
          dark: "#0B0B0D",   // Negro profundo
          green: "#2BB673",  // Verde seguridad
        },
      },
    },
  },
  plugins: [],
  safelist: [
    // Background colors
    "bg-axionova-orange",
    "bg-axionova-dark",
    "bg-axionova-green",
    "bg-axionova-orange/90",
    "bg-axionova-dark/90",
    "bg-axionova-green/90",
    // Text colors
    "text-axionova-orange",
    "text-axionova-dark",
    "text-axionova-green",
    // Border colors
    "border-axionova-orange",
    "border-axionova-dark",
    "border-axionova-green",
    // Hover states
    "hover:bg-axionova-orange",
    "hover:bg-axionova-orange/90",
    "hover:text-axionova-orange",
    "hover:border-axionova-orange",
    // Focus states
    "focus:bg-axionova-orange",
    "focus:text-axionova-orange",
    "focus:border-axionova-orange",
  ],
}
