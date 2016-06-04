//webpack.config.js
var path = require('path');

var srcRoot = path.join(__dirname, 'resources/src');

module.exports = {
    entry: './resources/src/index.jsx',
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        root: [srcRoot]//set relative path
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel', // 'babel-loader' is also a legal name to reference
            query: {
                presets: ['es2015', 'react']
            }
        },
        {
            test: /\.scss$/,
            loaders: [
            'style-loader',
            'css-loader?modules&sourceMap&importLoaders=2&localIdentName=[local]___[hash:base64:5]',
            'sass-loader?outputStyle=expanded&sourceMap'
            ]
        }]
    }
};
