const { src, dest } = require('gulp');
const nodeSass = require('node-sass')
const sass = require("gulp-sass")(nodeSass)
const useref = require("gulp-useref")
const cssnano = require("gulp-cssnano")

function sassTask() {
  return src(["scss/*.+(scss|css)"])
    .pipe(useref())
    .pipe(sass())
    .pipe(cssnano())
    .pipe(dest("./css"))
}

exports.sass = sassTask;
exports.default = sassTask;
