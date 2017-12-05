var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');

gulp.task('default', function() {
  gulp.watch('src/public/styles/sass/**/*.scss',['styles']);
});

gulp.task('styles', function() {
  gulp.src('src/public/styles/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('./src/public/styles'));
});
