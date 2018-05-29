var gulp = require('gulp');
var clean = require('gulp-clean');
gulp.task('clean', function () {
    gulp.src('./src/js/lib', { read: false }).pipe(clean());
});
gulp.task('lib_copy', function () {
    gulp.src('./bower_components/d3/d3.js')
        .pipe(gulp.dest('./src/js/lib'));
});
gulp.task("default",["clean","lib_copy"]);