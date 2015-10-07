import gulp from 'gulp'
import babel from 'gulp-babel'
import serve from 'gulp-serve'
import rename from 'gulp-rename'

const paths = {
  js: {
    main: './jm.babel.js'
  }
}

gulp.task('serve', serve({
  port: 4000,
  root: '.'
}))

gulp.task('babel', () => {
  gulp.src(paths.js.main)
    .pipe(babel({stage: 0}))
    .pipe(rename('jm.js'))
    .pipe(gulp.dest('./'))
})

gulp.task('watch', () => {
  gulp.watch(paths.js.main, ['babel'])
})

gulp.task('build', ['babel'])

gulp.task('default', ['build', 'watch', 'serve'])
