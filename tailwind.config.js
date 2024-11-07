/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      bigscreen: { min: "96rem" },
      desktop: { min: "80rem", max: "95.9375rem" },
      laptop: { min: "64rem", max: "79.9375rem" },
      "not-portable": { min: "64rem" },
      portable: { max: "63.9375rem" },
      tablet: { min: "48rem", max: "63.9375rem" },
      landscape: { min: "40rem", max: "47.9375rem" },
      mobile: { max: "39.9375rem" },
    },
    fontSize: {
      xxl: ["1.5rem", { lineHeight: "2.25rem" }] /* 24px */,
      xl: ["1.375rem", { lineHeight: "2.0625rem" }] /* 22px */,
      large: ["1.25rem", { lineHeight: "1.875rem" }] /* 20px */,
      medium: ["1.125rem", { lineHeight: "1.6875rem" }] /* 18px */,
      base: ["1rem", { lineHeight: "1.5rem" }] /* 16px */,
      regular: ["0.875rem", { lineHeight: "1.3125rem" }] /* 14px */,
      small: ["0.8125rem", { lineHeight: "1.21875rem" }] /* 13px */,
      xs: ["0.75rem", { lineHeight: "1.125rem" }] /* 12px */,
      xxs: ["0.625rem", { lineHeight: "0.9375rem" }] /* 10px */,
    },
  },
  plugins: [],
};
