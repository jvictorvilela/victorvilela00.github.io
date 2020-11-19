var gulp = require('gulp'); 

var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');



// task para compilar e minificar código sass
gulp.task('sass', function() {
    return gulp.src('sass/style.min.scss')
        .pipe(sass({errLogToConsole: true}))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(minifycss())
        .pipe(gulp.dest('css'))
});

// task para minificar código javascript
gulp.task('scripts', function() {
    return gulp.src('js/scripts.js')
    .pipe(rename('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js'))
});

// task para otimizar imagens
gulp.task('images', function() {
  return gulp.src('images/**')
  .pipe(imagemin())
  .pipe(gulp.dest('images'));
});