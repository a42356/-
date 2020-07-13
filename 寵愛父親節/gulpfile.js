'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');
// var pug = require('gulp-pug');
const postcss = require('gulp-postcss');
const plumber = require('gulp-plumber');
const autoprefixer = require('autoprefixer');
//const autoprefixer2 = require('gulp-autoprefixer');
const purgecss = require('gulp-purgecss');
const babel = require('gulp-babel');



gulp.task('sass', function () {

    return gulp.src('./public/src/css/**/*.scss')
      .pipe(plumber())
      .pipe(sass().on('error', sass.logError))
      .pipe(postcss([
          require('tailwindcss'),
          //autoprefixer(),
          autoprefixer(
            //{grid:"autoreplace"}
            ),
        ])) 
      //  .pipe(purgecss({
      //    content: ['public/**/*.html'],
      //    extractors: [
      //        {
      //          extractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
      //          extensions: ['vue', 'js']
      //        },
      //      ],
      //  })) 
      .pipe(gulp.dest('./public/css'));
  });



  gulp.task('out', () => {
    return gulp.src('public/css/**/*.css')
        .pipe(purgecss({
          content: ['./public/index.html'],

          defaultExtractor: content =>
          content.match(/[\w-/:]+(?<!:)/g) || [],
         
          
        }))
        .pipe(gulp.dest('public/css/out'))
})


gulp.task('babel', () =>
    gulp.src('./public/src/js/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('public/js'))
);



  gulp.task('watch', function () {
    gulp.watch('./public/src/css/**/*.scss', gulp.series('sass'));
    gulp.watch('./public/src/js/**/*.js', gulp.series('babel'));
    // gulp.watch('./source/**/*.pug', gulp.series('pug'));
  });

  gulp.task('default',gulp.parallel('sass','watch','babel'));