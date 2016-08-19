module.exports = {
    entry: "./index.js",
    output: {
        path: '../wdksw/static/js',
        filename: "bundle.js", 
        libraryTarget: "var",
        library: "lib", 
    },
    externals: {
        "jquery": "jQuery", 
    }, 
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }, 
            { test: /\.scss$/, loaders: ["style", "css", "sass"]}, 
            // { test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: 'babel',
            //     query: { presets: ['es2015'], plugins: ['transform-runtime'], cacheDirectory: true}, 
            // }, 
        ], 

    }
};