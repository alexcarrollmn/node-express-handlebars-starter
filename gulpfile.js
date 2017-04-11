var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task('styles', function() {
	gulp.src('./src/scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./public/css/'));
});

gulp.task('default',function() {
	gulp.watch('./src/scss/**/*.scss',['styles']);
});