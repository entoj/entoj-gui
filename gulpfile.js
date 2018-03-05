'use strict';


/**
 * Requirements
 */
const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');


/**
 * Configuration
 */
const config =
{
    root: __dirname + '/source/template',
    scss: __dirname + '/source/template/scss',
    css: __dirname + '/source/template/css',
    js: __dirname + '/source/template/js',
    semantic: __dirname + '/source/template/semantic',
    macros: __dirname + '/source/template/macros'
}


function scss()
{
    const sassOptions =
    {
        errLogToConsole: true,
        outputStyle: 'expanded'
    }
    return gulp
        .src(config.scss + '/entoj-gui.scss')
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.css));
}

/**
 * Compile scss files
 */
gulp.task('scss', scss);

gulp.task('scss-watch', function()
{
    return gulp
        .watch(config.scss + '/**/*.scss', scss);
});
