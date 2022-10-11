'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');


gulp.task('sass', function () {
   return gulp.src(['./src/styles/global.scss', './src/styles/themes/*.scss'])
   .pipe(sass().on('error', sass.logError))
   .pipe(cleanCSS())
   .pipe(gulp.dest('./src/assets'));
});