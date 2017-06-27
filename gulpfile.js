'use strict';

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const connect = require('gulp-connect');
const gulpStylelint = require('gulp-stylelint');

const exec = require('child_process').exec;

const buildFolder = 'dist';
const componentsFolder = 'components';

gulp.task('connect', function () {
    connect.server({
        root: buildFolder,
        livereload: true
    });
});

gulp.task('connect:reload', function () {
    gulp.src([
        `${ buildFolder }/**/*.html`,
        `${ buildFolder }/**/*.css`
    ]).pipe(connect.reload());
});

gulp.task('styleguide', (cb) => {
    exec('nucleus', function (err, stdout, stderr) {
        console.log(stdout);
        console.error(stderr);
        cb(err);
    });
});

gulp.task('sass', () => {
    return gulp.src([`${ componentsFolder }/styleguide.scss`])
        .pipe(plumber())
        .pipe(gulpStylelint({
            reporters: [
                {formatter: 'string', console: true}
            ]
        }))
        .pipe(sourcemaps.init())
        .pipe(sass({force: true}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(`${ buildFolder }/styles`));
});

gulp.task('sass:watch', () => {
    gulp.watch(
        [`${ componentsFolder }/*.scss`, `${ componentsFolder }/**/*.scss`],
        ['sass', 'styleguide', 'connect:reload']
    );
});

gulp.task('styleguide:watch', ['styleguide', 'sass', 'connect', 'sass:watch'])
gulp.task('default', ['styleguide', 'sass']);
