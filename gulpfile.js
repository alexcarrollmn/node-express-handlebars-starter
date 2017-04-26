var gulp = require("gulp");
var sass = require("gulp-sass");
var exec = require('child_process').exec;
var svgSprite = require('gulp-svg-sprite');

// SVG Config
var config = {
  mode: {
    symbol: { // symbol mode to build the SVG
      render: {
        css: false, // CSS output option for icon sizing
        scss: false // SCSS output option for icon sizing
      },
      dest: 'sprite', // destination folder
      prefix: '.svg--%s', // BEM-style prefix if styles rendered
      sprite: 'sprite.svg', //generated sprite name
      example: true // Build a sample page, please!
    }
  }
}

gulp.task('styles', function() {
	console.log('style change');
	gulp.src('./src/scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./public/css/'));
});

gulp.task('default', ['svg', 'styles'], function() {
	exec('nodemon app.js', function (err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
	gulp.watch('./src/scss/**/*.scss',['styles']);
	gulp.watch('./src/img/**/*.svg',['svg']);
});
gulp.task('svg', function(){
	console.log("svg change");
	gulp.src('**/*.svg', {cwd: 'src/**/*'})
		.pipe(svgSprite(config))
		.pipe(gulp.dest('public/img'));
})


