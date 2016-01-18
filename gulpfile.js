'use strict';

var gulp = require("gulp"),
	browserSync = require('browser-sync'),
	sass = require('gulp-sass');

gulp.task('server', function (){
	browserSync({
		port: 9000,
		server: {
			baseDir: 'app'
		}
	});
});

gulp.task('watch', function (){
	gulp.watch([
		'app/*.html',
		'app/js/**/*.js',
		'app/css/**/*.css',
		'app/sass/**/*.scss'
	]).on('change', browserSync.reload);
	gulp.watch('app/sass/**/*.scss', ['sass']);
});

gulp.task('sass', function () {
  gulp.src('app/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css'));
});

gulp.task('default', ['sass', 'server', 'watch']);