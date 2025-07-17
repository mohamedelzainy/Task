/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./App.tsx",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        muted: "#8C8E98",
      },
      fontSize: {
        "13px": "13px",
      },
      fontFamily: {
        pingRegular: ["Ping-Regular"],
        pingMedium: ["Ping-Medium"],
        pingBold: ["Ping-Bold"],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
