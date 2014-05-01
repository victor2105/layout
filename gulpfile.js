// include gulp
var gulp  = require('gulp');
var gutil = require('gulp-util');

// plugins
var changed  = require('gulp-changed');
var coffee   = require('gulp-coffee');
var imagemin = require('gulp-imagemin');
var plumber  = require('gulp-plumber');
var sass     = require('gulp-sass');
var serve    = require('gulp-serve');
var watch    = require('gulp-watch');

// input directories
var javascript_src = 'assets/scripts/**/*.js';
var coffee_src     = 'assets/scripts/**/*.coffee';
var imagemin_src   = 'assets/images/**/*';
var css_src				 = 'assets/styles/**/*.css';
var sass_src       = 'assets/styles/**/*.scss';

// output directories
var javascript_dist = 'application/scripts/';
var coffee_dist   	= 'application/scripts/';
var imagemin_dist 	= 'application/images/';
var css_dist				= 'application/styles/';
var sass_dist     	= 'application/styles/';


// serve files
gulp.task('server:start', function () {
    serve({
        root: 'application',
        port: 6174
    })();
});

// javascript move
gulp.task('js:move', function () {
	gulp.src(javascript_src)
		.pipe(gulp.dest(javascript_dist));
});

// compile coffeescript
gulp.task('coffee:compile', function () {
    gulp.src(coffee_src)
        .pipe(plumber())
        .pipe(coffee({bare: true}).on('error', gutil.log))
        .pipe(gulp.dest(coffee_dist));
});

// compress images
gulp.task('images:compress', function () {
    gulp.src(imagemin_src)
        .pipe(plumber())
        .pipe(changed(imagemin_dist))
        .pipe(imagemin())
        .pipe(gulp.dest(imagemin_dist));
});

// compile sass
gulp.task('sass:compile', function () {
    gulp.src(sass_src)
        .pipe(plumber())
        .pipe(sass({errLogToConsole: true}))
        .pipe(gulp.dest(sass_dist));
});

// javascript move
gulp.task('css:move', function () {
	gulp.src(css_src)
		.pipe(gulp.dest(css_dist));
});

// serve
gulp.task('dev', ['server:start', 'js:move', 'coffee:compile', 'images:compress', 'css:move', 'sass:compile'], function () {
		watch({glob: javascript_src}, function () {
        gulp.start('js:move');
    });
    watch({glob: coffee_src}, function () {
        gulp.start('coffee:compile');
    });
    watch({glob: imagemin_src}, function () {
        gulp.start('images:compress');
    });
    watch({glob: sass_src}, function () {
        gulp.start('sass:compile');
    });
    watch({glob: css_src}, function () {
        gulp.start('css:move');
    });

    gutil.log('Server listening on port: ' + gutil.colors.magenta('http://0.0.0.0:6174'));
});

// run all
gulp.task('default', function () {
    gutil.log('No default task registered.');
});
