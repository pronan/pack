module.exports = {
    entry: "./index.js",
    output: {
        path: '../wdksw/static/js',
        publicPath: 'static/js/', 
        filename: "bundle.js", 
        // libraryTarget: "var",
        // library: "lib", 
    },
    // externals: {
    //     "jquery": "jQuery", 
    // }, 
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }, 
            { test: /\.scss$/, loaders: ["style", "css", "sass"]}, 
            // { test: /\.coffee$/, loader: "coffee" },
            { loader: 'babel', test: /\.js$/, exclude: /(node_modules|bower_components)/, query: { presets: ['es2015'], plugins: ['transform-runtime'], cacheDirectory: true}, }, 
        ], 

    }
};