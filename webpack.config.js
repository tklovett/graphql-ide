var path = require('path')
var webpack = require('webpack')

module.exports = {
    // devtool: 'eval-source-map',
    devtool: "source-map",
    entry: {
        vendor: [
            'babel-polyfill',
            'react',
            'react-dom',
            'react-router',
            'sweetalert/dist/sweetalert.css'
        ],
        app: [
            './src/index.jsx'
        ]
    },
    output: {
        filename: "[name].js",
        path: path.join(__dirname, 'dist'),
    },
    resolve: {
        modules: [
            path.join(__dirname, 'src'),
            'node_modules'
        ],
        extensions: ['.webpack.js', '.web.js', '.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.([tj])sx?$/,
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader',
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.png$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 100000
                    }
                }]
            },
            {
                test: /\.jpg$/,
                loader: 'file-loader'
            }
        ]
    },
    target: 'electron-renderer',
    plugins: [
        new webpack.ContextReplacementPlugin(/moment[\\\/]locale$/, /^\.\/(en|nl)$/),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: "[name].js"
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery' // maybe unnecessary, since this ins't Angular 1: https://webpack.js.org/plugins/provide-plugin/#usage-jquery-with-angular-1
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new webpack.IgnorePlugin(/vertx/)
    ]
}
