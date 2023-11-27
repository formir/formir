const gulp = require('gulp');
const less = require('gulp-less');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('less', function () {
  return gulp.src('src/less/formir.less')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(postcss([autoprefixer()]))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css'));
});

// var sass = require('gulp-sass')(require('sass'));
// sass.compiler = require('node-sass');

// gulp.task('sass', function () {
//   return gulp.src('./src/scss/formir.scss')
//     .pipe(sourcemaps.init())
//     .pipe(sass().on('error', sass.logError))
//     .pipe(postcss([autoprefixer()]))
//     .pipe(cleanCSS())
//     .pipe(sourcemaps.write('.'))
//     .pipe(gulp.dest('./dist/css-sass'));
// });

gulp.task('assets', function () {
  return gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('default', gulp.parallel('less', 'assets'));