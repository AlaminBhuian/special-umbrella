// including plugins
var gulp = require('gulp')
, minifyHtml = require("gulp-minify-html")
, minifyCss = require("gulp-minify-css")
, uglify = require("gulp-uglify");

 
// task
gulp.task('minify-html', function () {
    gulp.src('*.html') // path to your files
    .pipe(minifyHtml())
    .pipe(gulp.dest('deploy'));
});

gulp.task('minify-css',function () {
	gulp.src('*.css')
	.pipe(minifyCss())
	.pipe(gulp.dest('deploy'));
});

// task
gulp.task('watch-c', function () {
    gulp.watch(['minify-html'], ['minify-css']);
});

gulp.task('minify-js', function () {
    gulp.src('*.js') // path to your files
    .pipe(uglify())
    .pipe(gulp.dest('deploy'));
});