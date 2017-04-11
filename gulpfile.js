var gulp = require("gulp");
var sass = require("gulp-sass");
var exec = require('child_process').exec;

gulp.task('styles', function() {
	gulp.src('./src/scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./public/css/'));
});

gulp.task('default',function() {
	exec('node app.js', function (err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
	gulp.watch('./src/scss/**/*.scss',['styles']);
});