const path = require('path');
const paths = {
    DIST: path.resolve(__dirname, 'dist'),
    SRC: path.resolve(__dirname, 'src'),
    JS: path.resolve(__dirname, 'src/app'),
};

module.exports = {
    entry: path.join(paths.JS, 'App.js'),
    output: {
        path: paths.DIST,
        filename: 'app.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: [
                    'babel-loader',
                ],
            },
            {
                test: /\.(jpg|png|gif|svg|pdf|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name]-[hash:8].[ext]'
                        },
                    },
                ]
            },
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader' }]
            }, {
                test: /\.css$/,
                use: [
                    {
                    loader: 'css-loader',
                    query: {
                        modules: true,
                        localIdentName: '[path][name]__[local]___[hash:base64:5]'
                        }
                     }
                ]
            }
        ],
    },
    resolve: {
        extensions: ['.js'],
    },
}; 