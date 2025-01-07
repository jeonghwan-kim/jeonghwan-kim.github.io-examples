const path = require('path')
const {ModuleFederationPlugin} = require('@module-federation/enhanced/webpack')

const port = process.env.PORT || 3001


module.exports = {
    mode: 'development',
    entry: {},
    output: {
        clean: true,
        publicPath: `http://localhost:${port}/dist/`,
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        port,
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'esbuild-loader',
            },
        ]
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'myRemote',
            exposes: {
                './Button': './src/Button',
                './math': './src/math',
            },
            shared: {
                react: {
                    singleton: true,
                },
                'react-dom': {
                    singleton: true,
                }
            },
        }),
    ],
}