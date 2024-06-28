/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const withMT = require("@material-tailwind/react/utils/withMT");
// eslint-disable-next-line no-unused-vars
const flowbite = require("flowbite-react/tailwind");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    " flowbite.content()",
  ],

  theme: {
    extend: {
      boxShadow: {
        "custom-text-shadow": "4px 3px 4px rgba(12,73,145,0.59)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow-custom": {
          textShadow: "4px 3px 4px rgba(12,73,145,0.59)",
        },
      });
    },
    // ...
    flowbite.plugin(),
  ],
});
