module.exports = {
  content: ["./index.html", "./script.js"],
  theme: {
    extend: {
      spacing: {
        "80%": "80%",
        "10%": "10%", // p-80% - doesn't work
      },
      fontfamily: {
        comsan: ["Commissioner", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      colors: {
        "overlay-rgba": "rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [require("@tailwindcss/custom-forms")],
};
