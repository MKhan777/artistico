const gulp = require("gulp");
const cssScss = require("gulp-css-scss");

gulp.task("css-scss", () => {
  return gulp
    .src("App.css")
    .pipe(cssScss())
    .pipe(gulp.dest("./src"));
});
// gulp.task("server", ["build"], function() {
//   browser.init({ server: "./_site", port: port });
// });
gulp.task("default", ["css-scss"]);
//ggulp.task("default", gulp.series("server", "watch"));
