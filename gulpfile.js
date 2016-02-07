'use strict';

var gulp = require("gulp"),
	browserSync = require('browser-sync'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	wiredep = require('wiredep').stream,
	useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    rimraf = require('gulp-rimraf'),
    gulpFilter = require('gulp-filter'),
    size = require('gulp-size');

//Сервер
gulp.task('server', function (){
	browserSync({
		port: 9000,
		server: {
			baseDir: 'app'
		}
	});
});

//Слежка
gulp.task('watch', function (){
	gulp.watch([
		'app/*.html',
		'app/js/**/*.js',
		'app/css/**/*.css',
		'app/sass/**/*.scss'
	]).on('change', browserSync.reload);
	gulp.watch('app/sass/**/*.scss', ['sass']);
	gulp.watch('bower.json', ['wiredep']);
});

//sass с автопрефексором
gulp.task('sass', function () {
  gulp.src('app/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
			browsers: ['>1%'],
			cascade: true
		}))
    .pipe(gulp.dest('app/css'));
});

//Слежка за Bower
gulp.task('wiredep', function () {
  gulp.src('app/*.html')
    .pipe(wiredep())
    .pipe(gulp.dest('app/'));
});

//Сборка
gulp.task('useref', function () {
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss({compatibility: 'ie8'})))
        .pipe(gulp.dest('dist'));
});

//Очистка
gulp.task('clean', function(){
	return gulp.src('dist', {ready: false})
	.pipe(rimraf());
});

//Перенести шрифты
gulp.task('fonts', function(){
	gulp.src('app/fonts/*')
	.pipe(gulp.dest('dist/fonts'))
});

//Перенести modernizr.js
gulp.task('modernizr', function(){
	gulp.src('app/js/modernizr.js')
	.pipe(gulp.dest('dist/js'))
});

//Перенести картинки
gulp.task('images', function(){
	gulp.src('app/img/*')
	.pipe(gulp.dest('dist/img'))
});

//Перенести все что в корне, за исключением .html
gulp.task('extras', function(){
	return gulp.src([
		'app/*.*',
		'!app/*.html'
		])
	.pipe(gulp.dest('dist'));
});

//Сбоока. Очищаем папку dist, и запускаем задачу dist
gulp.task('build', ['clean'], function(){
	gulp.start('dist');
});

gulp.task('dist', ['useref', 'images', 'fonts', 'modernizr', 'extras'], function(){
	return gulp.src('dist/**/*')
		.pipe(size({title: 'build'}))
});
//По-умолчани.
gulp.task('default', ['sass', 'server', 'watch']);