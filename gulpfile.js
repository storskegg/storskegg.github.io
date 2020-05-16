const gulp = require("gulp")
const sass = require("gulp-sass")
const useref = require("gulp-useref")
const cssnano = require("gulp-cssnano")

gulp.task("sass", function() {
  return gulp.src(["scss/*.+(scss|css)"])
    .pipe(useref())
    .pipe(sass())
    .pipe(cssnano())
    .pipe(gulp.dest("./css"))
})
