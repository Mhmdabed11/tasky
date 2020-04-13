/* eslint-disable global-require */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const presetsConfig = require('./build-utils/loadPresets');
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);

module.exports = ({ mode = 'production', presets = [] }) =>
    webpackMerge(
        {
            entry: './src/index.tsx',
            devtool: 'inline-source-map',
            output: {
                path: path.join(__dirname, '/dist'),
                filename: 'bundle.js',
            },
            mode,
            module: {
                rules: [
                    {
                        test: /\.tsx?$/,
                        exclude: /node_modules/,
                        use: {
                            loader: 'babel-loader',
                        },
                    },
                    {
                        test: /\.ts(x?)$/,
                        exclude: /node_modules/,
                        use: [
                            {
                                loader: 'ts-loader',
                            },
                        ],
                    },
                    {
                        enforce: 'pre',
                        test: /\.js$/,
                        loader: 'source-map-loader',
                    },
                ],
            },

            plugins: [
                new HtmlWebpackPlugin({
                    template: './src/index.html',
                }),
                new webpack.ProgressPlugin(),
            ],
            resolve: {
                extensions: ['.js', '.json', '.ts', '.tsx'],
            },
        },

        modeConfig(mode),
        presetsConfig({ mode, presets }),
    );
