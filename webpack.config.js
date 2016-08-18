module.exports = {
    entry: "./index.js",
    output: {
        path: '../wdksw/static/js',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }, 
            { test: /\.scss$/, loaders: ["style", "css", "sass"]}, 
        ], 

    }
};