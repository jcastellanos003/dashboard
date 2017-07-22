'use strict';

const gulp = require('gulp');
const util = require('gulp-util');

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const appPort = 8080;
const appHost = 'localhost';

gulp.task('default', ['webpack-dev-server']);

gulp.task('webpack-dev-server', (cb) => {
    const compiler = webpack(require('./webpack.config'));

    new WebpackDevServer(compiler)
        .listen(appPort, appHost, (err) => {
            if (err) throw new util.PluginError('webpack-dev-server', err);
            util.log(`App running on ${appHost}:${appPort}`);
            cb();
        })
});