var gulp = require('gulp');
var brotli = require('gulp-brotli');
var zopfli = require("gulp-zopfli");

gulp.task('compress:brotli', function () {
  return gulp.src([
    'Packages/Application/*/Resources/Public/**/*.js',
    'Packages/Framework/*/Resources/Public/**/*.js',
    'Packages/Sites/*/Resources/Public/**/*.js',
    'Packages/Application/*/Resources/Public/**/*.css',
    'Packages/Framework/*/Resources/Public/**/*.css',
    'Packages/Sites/*/Resources/Public/**/*.css'
  ])
    .pipe(brotli.compress())
    .pipe(gulp.dest(function(file) {
      return file.base;
    }));
});
gulp.task('compress:zopfli', function () {
  return gulp.src([
    'Packages/Application/*/Resources/Public/**/*.js',
    'Packages/Framework/*/Resources/Public/**/*.js',
    'Packages/Sites/*/Resources/Public/**/*.js',
    'Packages/Application/*/Resources/Public/**/*.css',
    'Packages/Framework/*/Resources/Public/**/*.css',
    'Packages/Sites/*/Resources/Public/**/*.css'
  ])
    .pipe(zopfli())
    .pipe(gulp.dest(function(file) {
      return file.base;
    }));
});

gulp.task('compress', [
  'compress:brotli',
  'compress:zopfli'
]);
