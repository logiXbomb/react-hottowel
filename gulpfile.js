var gulp = require("gulp");
var $ = require("gulp-load-plugins");

gulp.task("html", function () {
  gulp.src("./src/index.html")
    .pipe(gulp.dest("./.tmp"));
});
