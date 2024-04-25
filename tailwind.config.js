module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-section-bg": "url('../src/assets/Hero-Section-bg.png')",
        "hero-section-mobile-bg":
          "url('../src/assets/Hero-Section-bg-mobile.png')",
        "home-analytics-landing-bg":
          "url('../src/assets/home-analytics-bg.png')",
        "buyer-landing-bg": "url('../src/assets/buyer-landing-bg.png')",
        "hero-section-overlay": "url('../src/assets/Hero-Section-overlay.png')",
        "faq-landing": "url('../src/assets/faq-landing-bg.png')",
        "blogs-landing": "url('../src/assets/blogs-page-bg.png')",
        "seller-landing": "url('../src/assets/seller-landing-bg.png')",
        "calendy-contact-section":
          "url('../src/assets/calendy-contact-bg.png')",
        "home-equity-qualify": "url('../src/assets/qualify-landing-bg.png')",
        "press-landing": "url('../src/assets/press-landing-bg.png')",
        "culture-principle": "url('../src/assets/culture-principle-bg.png')",
        "msa-hero": "url('../src/assets/msa-hero-bg.png')",
        "msa-last-updated": "url('../src/assets/last-updated-bg.png')",
      },
      placeholderColor: ["responsive", "dark", "focus", "hover"], // enable placeholder colors
    },
  },
  plugins: [],
};
