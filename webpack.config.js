let webpack = require('webpack'),
    path = require('path'),
    NODE_ENV = process.env.NODE_ENV,
    main,
    dev = {},
    prod = {};

main = {
    entry: './index',
    output: {
        publicPath: '/assets/',
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.jsx']
    },
    resolveModules: {
        modulesDirectories: ['node_modules'],
        moduleTemplate: ['*', '*-loader'],
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        })
    ]

};

if (NODE_ENV == 'development') {
    Object.assign(dev, main);
    dev.debug = true;
    dev.devtool = 'cheap-inline-module-source-map';
    dev.devServer = {
        inline: true,
        historyApiFallback: true
    };
    dev.progress = true;
    dev.watch = true;
}

if (NODE_ENV == 'production') {
    Object.assign(prod, main);
    prod.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true
            }
        })
    );
}

module.exports = NODE_ENV == 'development'? dev: prod;