const path = require('path')
const webpack = require('webpack')

module.exports = {

    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        'babel-polyfill',
        path.resolve(__dirname, 'index.js')
    ],

    devServer: {
        inline: true,
        port: 4000
    },

    resolve: {
        alias: {
            Action: path.resolve(__dirname, 'actions/'),
            Component: path.resolve(__dirname, 'components/'),
            Container: path.resolve(__dirname, 'containers/'),
            Reducer: path.resolve(__dirname, 'reducers/'),
            Style: path.resolve(__dirname, 'style')
        }
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['react', 'es2015', 'stage-0']
                }
            }
        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
            'React': 'react',
            'ReactDOM': 'react-dom'
        })
    ]
}
