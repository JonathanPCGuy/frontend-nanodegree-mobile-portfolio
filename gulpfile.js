var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var jsmin = require('gulp-jsmin');
var rename = require('gulp-rename');
var minifyHTML = require('gulp-minify-html');
var gulpFilter = require('gulp-filter');
// todo: fix duplicate min files
 
gulp.task('minify-css', function() {
  return gulp.src(['css/*.css', '!css/*.min.css'])
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('js-min', function () {
    return gulp.src(['js/*.js', '!js/*.min.js'])
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});

gulp.task('minify-html', function() {
 
  return gulp.src('./index-original.html')
    .pipe(minifyHTML())
    .pipe(rename('index.html'))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['minify-css', 'js-min','minify-html']);

// todo: add step to copy back to js/css dir