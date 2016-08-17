module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "main.[hash].js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }, 
            { test: /\.scss$/, loaders: ["style", "css", "sass"]}, 
        ], 

    }
};