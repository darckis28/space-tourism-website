/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      "blue-900": "#0B0D17",
      "blue-300": "#D0D6F9",
      white: {
        default: "#FFFFFF",
        100: "rgba(255, 255, 255, .1)",
      },
    },
    backgroundImage: {
      "Home-mobile": "url('/backgrounds/background-home-mobile.jpg')",
      "Home-tablet": "url('/backgrounds/background-home-tablet.jpg')",
      "Home-desktop": "url('/backgrounds/background-home-desktop.jpg') ",
      "Destination-mobile":
        "url('/backgrounds/background-destination-mobile.jpg')",
      "Destination-tablet":
        "url('/backgrounds/background-destination-tablet.jpg')",
      "Destination-desktop":
        "url('/backgrounds/background-destination-desktop.jpg')",
      "Crew-mobile": "url('/backgrounds/background-crew-mobile.jpg')",
      "Crew-tablet": "url('/backgrounds/background-crew-tablet.jpg')",
      "Crew-desktop": "url('/backgrounds/background-crew-desktop.jpg')",
      "Technology-mobile":
        "url('/backgrounds/background-technology-mobile.jpg')",
      "Technology-tablet":
        "url('/backgrounds/background-technology-tablet.jpg')",
      "Technology-desktop":
        "url('/backgrounds/background-technology-desktop.jpg')",
    },
    fontFamily: {
      Bellefair: ["Bellefair", "serif"],
      Barlow: ["Barlow", "sans-serif"],
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
