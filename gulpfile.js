var gulp = require('gulp');
gulp.task('lib_copy', function(){
    gulp.src('./bower_components/d3/d3.js')
        .pipe(gulp.dest('./src/js/lib'));
});