module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-section-bg": "url('../src/assets/Hero-Section-bg.png')",
        "buyer-landing--bg": "url('../src/assets/Buyer-landing-bg.png')",
        "hero-section-overlay": "url('../src/assets/Hero-Section-overlay.png')",
      },
      placeholderColor: ["responsive", "dark", "focus", "hover"], // enable placeholder colors
    },
  },
  plugins: [],
};
