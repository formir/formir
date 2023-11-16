const gulp = require('gulp');
const less = require('gulp-less');
const LessPluginAutoPrefix = require('less-plugin-autoprefix')
const replace = require('gulp-replace');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const fs = require('fs');

const packageJson = JSON.parse(fs.readFileSync('./package.json'));
autoprefix= new LessPluginAutoPrefix({browsers: packageJson.browserlist});


gulp.task('styles', function () {
  return gulp.src('src/less/formir.less')
    .pipe(sourcemaps.init())
    .pipe(replace('VERSION_NUMBER', packageJson.version))
    .pipe(less({ plugins: [autoprefix] }))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('assets', function () {
  return gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('default', gulp.parallel('styles', 'assets'));