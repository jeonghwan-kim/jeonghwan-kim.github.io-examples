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
        extensions: ['.ts', '.tsx', '.js'],
    },
    devServer: {
        port,
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'esbuild-loader',
            },
        ]
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'remote',
            exposes: {
                './button': './src/Button',
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