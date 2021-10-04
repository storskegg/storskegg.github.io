const { src, dest } = require('gulp');
const sass = require("gulp-sass")
const useref = require("gulp-useref")
const cssnano = require("gulp-cssnano")

function sassTask() {
  return src(["scss/*.+(scss|css)"])
    .pipe(useref())
    .pipe(sass())
    .pipe(cssnano())
    .pipe(dest("./css"))
}

exports.default = sassTask;
