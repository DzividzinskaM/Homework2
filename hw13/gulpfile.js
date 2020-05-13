const gulp = require("gulp");
const sass = require("gulp-sass");
const connect = require("gulp-connect");
const webpackStream = require("webpack-stream");
const named = require("vinyl-named");

function server() {
  return connect.server({
    root: "app",
    livereload: true,
  });
}

function style() {
  return gulp
    .src("./app/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./app/css"))
    .pipe(connect.reload());
}

function scripts() {
  return gulp
    .src("./app/js/*.js")
    .pipe(named())
    .pipe(webpackStream())
    .pipe(gulp.dest("./app"));
}

function watch() {
  gulp.watch("./app/scss/**/*.scss", style);
  gulp.watch("./app/js/**/*.js", scripts);
}

exports.style = style;
exports.watch = watch;
exports.server = server;
exports.scripts = scripts;
exports.default = gulp.parallel(watch, server);

// 1) минификация css
// 2) проставление префиксов кросбарузерности css
// 3) следить за изменениями html и перезагружать страницу (connect.reload())
