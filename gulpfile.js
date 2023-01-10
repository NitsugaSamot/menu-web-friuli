const { series, src, dest, watch, parallel } = require('gulp')
const sass = require('gulp-dart-sass')
const imagemin = require('gulp-imagemin')
// const webp = require('gulp-webp')
const concat = require('gulp-concat')


const paths = {
    imagenes: 'src/img/**/*',
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js'
}

//Funcion que compila sass

function css(  ) {
    return src('src/scss/app.scss')
        .pipe(sass({
            outputStyle: 'expanded'        
        }))
        .pipe(dest('./build/css'))
}

function minificarcss() {
    return src('src/scss/app.scss')
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(dest('./build/css'))
}

function javascript() {

        return src(paths.js)
            .pipe(concat('bundle.js'))
            .pipe (dest('./build/js'))
}

function imagenes() {
    return src('src/img/**/*')
    .pipe(imagemin())
    .pipe(dest('./build/img')) 
}

// function versionWebp() {
//     return src('src/img/**/*')
//     .pipe( webp )
//     .pipe( dest('./build/img'))
// }

function watchArchivos() {
    watch(paths.scss, css)
    watch(paths.js, javascript)
}

exports.css = css
exports.minificarcss = minificarcss
exports.imagenes =  imagenes
exports.watchArchivos = watchArchivos

exports.default = series(css, javascript, imagenes, watchArchivos)