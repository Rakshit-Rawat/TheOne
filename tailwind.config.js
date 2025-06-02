/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        tablet: "900px",
        mobile: "575px",
        tablet_trending: "990px",
      },
      fontFamily: {
        barlow: ["Barlow Condensed", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundColor: {
        footer: "#f3f3f3",
      },
      backgroundImage: {
        hero: "url(https://cdn.shopify.com/s/files/1/0577/9675/5633/files/leo_daone_home1_slide1_bg.jpg?v=1702698901)",
        forest:
          "url(https://cdn.shopify.com/s/files/1/0577/9675/5633/files/leo_daone_home1_bg_3.jpg?v=1702981001)",
        card: "url(https://cdn.shopify.com/s/files/1/0577/9675/5633/files/leo_daone_home1_card.png?v=1702981001)",
        rider:
          "url(https://cdn.shopify.com/s/files/1/0577/9675/5633/files/leo_daone_home1_blog_1.jpg?v=1703124490)",
          jumper:"url(https://cdn.shopify.com/s/files/1/0577/9675/5633/files/leo_daone_home1_blog_2.jpg?v=1703124490)"
      },
      rotate: {
        "0%": { transform: "rotate(0deg)" },
        "360%": { transform: "rotate(360deg)" },
      },
    },
  },
  plugins: [],
};
