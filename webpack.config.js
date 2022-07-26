const path = require("path");

module.exports = {
    entry: "./dev/js/main.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "src"),
    },
    experiments: {
        topLevelAwait: true,
    },
    mode: "production",
};
