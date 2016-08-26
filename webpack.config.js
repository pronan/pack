var webpack = require("webpack");

module.exports = {
    entry: "./index.js",
    output: {
        path      : '../wdksw/static/js',
        publicPath: '/static/js/', 
        filename  : "a.js", 
        // libraryTarget: "var",
        // library: "lib", 
    },
    externals: {
        //"jquery": "$", 
    }, 
    plugins: [
        //new webpack.ProvidePlugin({$:'jquery', jQuery:'jquery'}), 
    ], 
    module: {
        loaders: [
            //{ loader: 'babel', test: /\.js$/, exclude: /(node_modules|bower_components)/, query: { presets: ['es2015'], plugins: ['transform-runtime'], cacheDirectory: true}, }, 
            { test: /\.css$/, loader: "style!css" }, 
            { test: /\.scss$/, loaders: ["style", "css", "sass"]}, 
            { test: /\.coffee$/, loader: "coffee-loader" },
        ], 

    }
};