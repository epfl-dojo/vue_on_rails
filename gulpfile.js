var gulp = require('gulp')
var concat = require('gulp-concat')
const browserify = require('gulp-browserify')
const vueify = require('vueify')
const babelify = require('babelify')


gulp.task('default', ['build'])

gulp.task('build:vue', () => {
  return gulp.src('app/gulp/js/rock-da-vue.js')
    .pipe(browserify({ transform: [ babelify, [vueify, {_flags: {debug: true}} ] ]}))
    .pipe(gulp.dest('vendor/assets/'))
})

gulp.task('build:js', ['build:vue'], function () {
  return gulp.src(['app/gulp/js/**/*.js', 'vendor/assets/rock-da-vue.js', '!app/gulp/js/rock-da-vue.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('vendor/assets/javascripts/gulp/'))
})

gulp.task('build:css', function () {
  return gulp.src('app/gulp/css/**/*.css')
    .pipe(concat('app.css'))
    .pipe(gulp.dest('vendor/assets/stylesheets/gulp/'))
})

gulp.task('watch:vue', function() {
  gulp.watch('app/gulp/vue/**/*.vue', ['build:vue'])
})

gulp.task('watch:js', function () {
  gulp.watch('app/gulp/js/**/*.js', ['build:js'])
})

gulp.task('watch:css', function () {
  gulp.watch('app/gulp/css/**/*.css', ['build:css'])
})

gulp.task('watch', ['build', 'watch:js', 'watch:css', 'watch:vue'])
gulp.task('build', ['build:js', 'build:css', 'build:vue'])
