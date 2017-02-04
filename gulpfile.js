var gulp         = require( 'gulp' ),
    gulp_cssnano = require('gulp-cssnano'),
    gulp_rename  = require('gulp-rename'),
    gulp_uglify  = require('gulp-uglify'),
    gulp_concat = require('gulp-concat'),
    gulp_autoprefixer = require ( 'gulp-autoprefixer' ),
    gulp_sass = require('gulp-sass'),
    gulp_imagmin = require ('gulp-imagemin'),
    gulp_connect = require ('gulp-connect'),
    gulp_plumber = require ('gulp-plumber'),
    gulp_sourcemaps = require ('gulp-sourcemaps'),
    gulp_notify = require('gulp-notify');

var config = {
    'dist': 'dist/',
    'src' : 'src/',
    'assets': 'dist/assets/'
}


gulp.task('sass', function () {
    return gulp.src(config.src + 'scss/*.scss')
    .pipe(gulp_plumber({errorHandler: gulp_notify.onError('SASS Erro  <%= error.message %>')}))
    .pipe(gulp_sourcemaps.init())
    .pipe(gulp_sass({outputStyle: 'compressed'}).on('error', gulp_sass.logError))
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

gulp.task('styles', function () {
    return gulp.src(config.src + 'styles/*.css')
    .pipe(gulp_plumber({errorHandler: gulp_notify.onError('STYLES Erro  <%= error.message %>')}))
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


gulp.task( 'javascript', function()
{
    return gulp.src( [
            './src/js/fastclick.js',
            './src/js/main.js',
        ] )
        .pipe(gulp_plumber({errorHandler: gulp_notify.onError("JS Error: <%= error.message %>")}))
        .pipe(gulp_sourcemaps.init())
        .pipe( gulp_concat( 'main.min.js' ) )
        .pipe( gulp_uglify() )
        .pipe(gulp_sourcemaps.write())
        .pipe( gulp.dest(config.assets + 'js' ) );
} );

gulp.task( 'watch', function()
{
    gulp.watch(config.src + 'scss/**/*.scss', [ 'sass' ] );
    gulp.watch(config.src + 'js/*.js', [ 'javascript' ] );
    gulp.watch(config.dist + '*.html', ['html']);
} );

gulp.task('imagemin', function()
{
    return gulp.src(config.src + 'img/*')
        .pipe(gulp_imagmin())
        .pipe(gulp.dest(config.assets + 'img'))
        .pipe(gulp_connect.reload())
        .pipe(gulp_notify('Images minified!'))
});

gulp.task('connect', function() {
  gulp_connect.server({
    port : 8888,
    root: 'dist/',
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src(config.dist + '*.html')
    .pipe(gulp_connect.reload());
});

gulp.task( 'default', [ 'watch', 'connect' ], function() {} );
