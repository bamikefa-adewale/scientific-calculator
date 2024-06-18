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

  // content: [
  //   // ...
  //   flowbite.content(),
  // ],
  theme: {
    extend: {},
  },
  plugins: [
    // ...
    flowbite.plugin(),
  ],
});
