(() => {
  "use strict";
})();

import gulp from "gulp";
import browserify from "browserify";
import source from "vinyl-source-stream";

gulp.task("default", ["transpile", "copy-assets"]);

gulp.task("transpile", () => {

  return browserify("src/app.js")
    .transform("babelify")
    .bundle()
    .pipe(source("application.js"))
    .pipe(gulp.dest("dist"));

});

gulp.task("copy-assets", () => {
  return gulp.src("src/assets/css/*.css")
    .pipe(gulp.dest("dist"));
});

gulp.task("watch", ["transpile", "copy-assets"], () => {
  gulp.watch("src/**/*", ["default"]);
});
