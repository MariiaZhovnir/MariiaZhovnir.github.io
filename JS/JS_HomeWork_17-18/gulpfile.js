var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rigger = require('gulp-rigger');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var cssnano = require('gulp-cssnano');
var del = require('del');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var imagemin = require('gulp-imagemin');
var imageminPngquant = require('imagemin-pngquant');

var path = {
    src: {
        html: 'src/*.html',
        css: 'src/sass/**/*.scss',
        js: 'src/js/**/*.js',
        img: 'src/img/**/*.+(png|jpg|gif|svg)',
        fonts: 'src/fonts/**/*.*'
    },
    build: {
        html: 'build/',
        css: 'build/css',
        js: 'build/js',
        img: 'build/img',
        fonts: 'build/fonts'
    },
    watch: {
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/sass/**/*.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './build'
};

var config = {
    server: {
        baseDir: './build'
    },
    host: 'localhost',
    port: 9000,
    logPrefix: 'MariiaZhovnir',
    notify: false
};

gulp.task('bundleHtml', function () {
    return gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('bundleCss', function() {
    return gulp.src(path.src.css)
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cssnano())
        .pipe(gulp.dest(path.build.css))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('bundleJs', function () {
    return gulp.src(path.src.js)
        .pipe(concat('script.js'))
        .pipe(babel({presets: ['env']}))
        .pipe(uglify())
        .pipe(gulp.dest(path.build.js))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('bundleFonts', function () {
   return gulp.src(path.src.fonts)
       .pipe(gulp.dest(path.build.fonts));
});

gulp.task('bundleImg', function () {
    return gulp.src(path.src.img )
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [imageminPngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img))
.pipe(browserSync.reload({stream:true}));
});

gulp.task('server', function () {
   browserSync(config);
});

gulp.task('watch', function () {
    gulp.watch(path.watch.style, ['bundleCss']);
    gulp.watch(path.watch.html, ['bundleHtml']);
    gulp.watch(path.watch.js, ['bundleJs']);
    gulp.watch(path.watch.fonts, ['bundleFonts']);
    gulp.watch(path.watch.img, ['bundleImg'])
});

gulp.task('clean:build', function () {
    return del.sync(path.clean);
});

gulp.task('start', ['clean:build', 'bundleHtml', 'bundleCss', 'bundleJs', 'bundleFonts', 'bundleImg', 'server', 'watch']);