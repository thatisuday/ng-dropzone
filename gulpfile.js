var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    cssmin = require('gulp-cssmin'),
    sass = require('gulp-sass')(require('node-sass')),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    gzip = require('gulp-gzip');

// Build JavaScript
function buildJS() {
    return gulp
        .src('src/js/**/*.js')
        .pipe(concat('ng-dropzone.js'))
        .pipe(sourcemaps.init())
        .pipe(gulp.dest('dist'))
        .pipe(rename({suffix:'.min'}))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist'))
        .pipe(gzip({append:true}))
        .pipe(gulp.dest('dist'));
}

// Build SASS
function buildSASS() {
    return gulp
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
        .pipe(gulp.dest('dist'));
}

// Watch all
function watch() {
    gulp.watch('src/js/**/*.js', buildJS);
    gulp.watch('src/sass/**/*.scss', buildSASS);
}

// Define tasks
gulp.task('buildJS', buildJS);
gulp.task('buildSASS', buildSASS);
gulp.task('build', gulp.parallel('buildJS', 'buildSASS')); // use gulp.parallel or gulp.series as needed
gulp.task('watch', gulp.series('build', watch)); // watch depends on build, so use gulp.series
