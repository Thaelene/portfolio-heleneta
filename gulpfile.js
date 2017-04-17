var gulp         = require( 'gulp' ),

    // Utility dependencies
    gulp_rename  = require('gulp-rename'),
    gulp_plumber = require ('gulp-plumber'),
    gulp_sourcemaps = require ('gulp-sourcemaps'),
    gulp_notify = require('gulp-notify'),
    gulp_connect = require ('gulp-connect')

    // CSS
    gulp_cssnano = require('gulp-cssnano'),
    gulp_autoprefixer = require ( 'gulp-autoprefixer' ),
    gulp_sass = require('gulp-sass'),

    // JS
    gulp_uglify  = require('gulp-uglify'),
    gulp_concat = require('gulp-concat'),

    // Images
    gulp_imagmin = require ('gulp-imagemin');

var config = {
    'dist': 'dist/',
    'src' : 'src/',
    'assets': 'dist/assets/'
}

// Running it by the command line : gulp
gulp.task( 'default', [ 'watch', 'connect' ], function() {} );

// Scss into css, minifies and rename it "style.min.css"
gulp.task('sass', function () {
    return gulp.src(config.src + 'scss/*.scss')
    .pipe(gulp_plumber({
        errorHandler: gulp_notify.onError('SASS Erro  <%= error.message %>')
    }))
    .pipe(gulp_sourcemaps.init())
    .pipe(gulp_sass({
        outputStyle: 'compressed'}).on('error', gulp_sass.logError))
    .pipe(gulp_sourcemaps.write())
    .pipe(gulp_autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
    .pipe(gulp_rename('style.min.css'))
    .pipe(gulp.dest(config.assets + 'css'))
    .pipe(gulp_connect.reload())
    .pipe(gulp_notify('SASS has been compiled !'))
});

// Minifies and rename others css such as reset.css etc "library.min.css"
gulp.task('styles', function () {
    return gulp.src(config.src + 'styles/*.css')
    .pipe(gulp_plumber({
        errorHandler: gulp_notify.onError('STYLES Erro  <%= error.message %>')
    }))
    .pipe(gulp_sourcemaps.init())
    .pipe(gulp_cssnano())
    .pipe(gulp_sourcemaps.write())
    .pipe(gulp_autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
    .pipe(gulp_rename('library.min.css'))
    .pipe(gulp.dest(config.assets + 'css'))
    .pipe(gulp_connect.reload())
});

// Concats and uglifies js files
// If several js files, please add them on line 74
gulp.task( 'javascript', function()
{
    return gulp.src( [
            './src/js/main.js',
            './src/js/**/*.js'
        ] )
        .pipe(gulp_plumber({
            errorHandler: gulp_notify.onError("JS Error: <%= error.message %>")
        }))
        .pipe(gulp_sourcemaps.init())
        .pipe( gulp_uglify() )
        .pipe( gulp_concat( 'main.min.js' ) )
        .pipe(gulp_sourcemaps.write())
        .pipe( gulp.dest(config.assets + 'js' ) );
} );

// Uglifies external js from section lab
gulp.task( 'ext-javascript', function()
{
    return gulp.src('./src/js/lab/*.js')
        .pipe(gulp_plumber({
            errorHandler: gulp_notify.onError("JS Error: <%= error.message %>")
        }))
        .pipe(gulp_sourcemaps.init())
        .pipe( gulp_uglify() )
        .pipe(gulp_sourcemaps.write())
        .pipe( gulp.dest(config.assets + 'js/lab' ) );
} );

// Minifies images
gulp.task('imagemin', function()
{
    return gulp.src(config.src + 'img/*')
        .pipe(gulp_imagmin())
        .pipe(gulp.dest(config.assets + 'img'))
        .pipe(gulp_connect.reload())
        .pipe(gulp_notify('Images minified!'))
});

// Autoreload setup
gulp.task('connect', function() {
  gulp_connect.server({
    port : 8888,
    root: 'dist/',
    livereload: true
  });
});

// Autoreload task
gulp.task('html', function () {
  return gulp.src(config.src + '*.html')
  .pipe(gulp.dest(config.dist))
  .pipe(gulp_connect.reload())
});

// Watches files change and launches relatives tasks
gulp.task( 'watch', function()
{
    gulp.watch(config.src + 'scss/**/*.scss', [ 'sass' ] );
    gulp.watch([config.src + 'js/*.js', config.src + 'js/**/*.js'], [ 'javascript' ] );
    gulp.watch(config.src + '*.html', ['html']);
} );
