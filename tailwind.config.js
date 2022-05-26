module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#771D32",

          secondary: "#E65758",

          accent: "#fce620",

          neutral: "#201D2F",

          "base-100": "#FFFFFF",

          info: "#8ECCF5",

          success: "#27CE8E",

          warning: "#A15912",

          error: "#E75A71",
        },
      },
    ],
  },
  // daisyui: {
  //   themes: [
  //     {
  //       mytheme: {
  //         primary: "#5CDB95",
  //         secondary: "#379683",
  //         accent: "#00CEC9",
  //         neutral: "#3d4451",
  //         "base-100": "#ffffff",
  //       },
  //     },
  //     // "dark",
  //     "cupcake",
  //   ],
  // },
  plugins: [require("daisyui")],
};
