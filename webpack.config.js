const webpack = require('webpack');
const path    = require('path');

module.exports = {
    mode: 'development',

    devtool: 'eval-source-map',

    entry: [
        'react-hot-loader/patch',
        './src/main.js'
    ],

    output: {
        path      : path.join(__dirname, '/public/static/build'),
        filename  : 'build.js',
        publicPath: '/static/build/'
    },

    resolve: {
        alias: {
          'react-dom': '@hot-loader/react-dom'
        }
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('autoprefixer')()
                            ]
                        }
                    },
                    'less-loader'
                ]
            },
            {
                test: /\.(otf|eot|ttf|ttc|woff|woff2|jpe?g|png|gif|svg)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 24000
                        }

                    }
                ]
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
            }
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};
