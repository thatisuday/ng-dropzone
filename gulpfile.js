var
	gulp = require('gulp'),
	concat = require('gulp-concat'),	
	rename = require('gulp-rename'),	
	cssmin = require('gulp-cssmin'),	
	sass = require('gulp-sass'),	
	autoprefixer = require('gulp-autoprefixer'),	
	uglify = require('gulp-uglify'),	
	sourcemaps = require('gulp-sourcemaps')
	gzip = require('gulp-gzip')
;


// Build JavaScript
gulp.task('buildJS', function(){
	gulp
	.src('src/js/**/*.js')
	.pipe(concat('ng-dropzone.js'))
	.pipe(sourcemaps.init())
	.pipe(gulp.dest('dist'))
	.pipe(rename({suffix:'.min'}))
	.pipe(uglify())
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest('dist'))
	.pipe(gzip({append:true}))
	.pipe(gulp.dest('dist'))
});

// Build SASS
gulp.task('buildSASS', function(){
	gulp
	.src('src/sass/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(concat('ng-dropzone.css'))
	.pipe(autoprefixer())
	.pipe(sourcemaps.init())
	.pipe(gulp.dest('dist'))
	.pipe(rename({suffix:'.min'}))
	.pipe(cssmin())
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest('dist'))
	.pipe(gzip({append:true}))
	.pipe(gulp.dest('dist'))
});

// Build all
gulp.task('build', ['buildJS', 'buildSASS']);

// Watch all
gulp.task('watch', ['build'], function(){
	gulp.watch('src/js/**/*.js', ['buildJS']);
	gulp.watch('src/sass/**/*.scss', ['buildSASS']);
});