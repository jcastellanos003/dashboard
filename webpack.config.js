'use strict';

const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpack = require('html-webpack-plugin'),
    ChunkWebpack = webpack.optimize.CommonsChunkPlugin,
    CopyWebpackPlugin = require('copy-webpack-plugin');


const rootDir = __dirname + '/client';
const webpackDevServerEntryPoint = 'webpack-dev-server/client?http://localhost:8080/';
const PORT = process.env.PORT | 9000;

module.exports = {
    context: __dirname,
    entry: {
        vendor: ['./client/vendor.ts', webpackDevServerEntryPoint],
        app: ['./client/main.ts', webpackDevServerEntryPoint]
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },

    resolve: {
        extensions: ['.js', '.ts', '.css'],
        modules: [
            'node_modules', 'client', 'client/**', '.'
        ]
    },

    devtool: 'source-map',

    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: "html-loader?attrs=img:src"
            },
            {
                test: /^index\.html$/,
                loader: "file-loader?name=[path][name].[ext]"
            },
            {
                test: /\.ts$/,
                exclude: [/test/],
                loaders: [
                    'awesome-typescript-loader',
                    'angular2-template-loader',
                    'angular2-router-loader'
                ]
            },

            { //this is global SCSS
                test: /assets\/css\/.*\.scss/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            },
            { //Ans this is for components SCSS :S
                test: /\.scss$/,
                exclude: [/node_modules/, /assets\/css\/.*\.scss/],
                loaders: ['to-string-loader', 'css-loader', 'resolve-url-loader', 'sass-loader']
            },
            {
                test: /^(?!.*\.min\.css$).*\.css$/,
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /vendor\/.*\.(css|js)/,
                loader: 'file-loader?name=[path][name].[ext]',
                exclude: [/node_modules/]
            },
            {
                test: /\.(png|jpg|gif|svg|woff2?|oet|otf|ttf)(\?.*)?$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },

    plugins: [
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            path.resolve(__dirname, '../client')
        ),
        new CopyWebpackPlugin(
            [{
                context: 'client/assets/',
                from: '**/*',
                to: './assets',
                ignore: '*.scss'

            },{
                context: 'client/api/',
                from: '**/*',
                to: './api'
            }]
        ),
        new ChunkWebpack({
            filename: 'vendor.js',
            minChunks: Infinity,
            name: 'vendor'
        }),
        new HtmlWebpack({
            filename: 'index.html',
            inject: 'body',
            template: path.resolve(rootDir, 'index.html')
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'PORT': JSON.stringify(PORT)
            }
        })
    ]
};
