// Srigar: We can use babel-register only for development purpose only. For prod need to to webpack build for node.
require("@babel/register")({
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current"
        }
      }
    ]
  ],
  plugins: [
    [
      "babel-plugin-transform-require-ignore",
      {
        extensions: [".css"]
      }
    ]
  ]
});

require("./src/server");
