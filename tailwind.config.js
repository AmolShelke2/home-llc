module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-section-bg": "url('../src/assets/Hero-Section-bg.png')",
        "home-analytics-landing-bg":
          "url('../src/assets/home-analytics-bg.png')",
        "buyer-landing-bg": "url('../src/assets/buyer-landing-bg.png')",
        "hero-section-overlay": "url('../src/assets/Hero-Section-overlay.png')",
        "faq-landing": "url('../src/assets/faq-landing-bg.png')",
        "blogs-landing": "url('../src/assets/blogs-page-bg.png')",
        "seller-landing": "url('../src/assets/seller-landing-bg.png')",
      },
      placeholderColor: ["responsive", "dark", "focus", "hover"], // enable placeholder colors
    },
  },
  plugins: [],
};
