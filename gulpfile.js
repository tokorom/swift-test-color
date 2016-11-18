'use strict'

let gulp = require('gulp')
let shell = require('gulp-shell')
let runSequence = require('run-sequence')

gulp.task('build', shell.task([
  'swift build'
]))

gulp.task('test', shell.task([
  'swift test'
]))

gulp.task('default', ['build'])

gulp.task('watch', () => {
  gulp.watch('./**/*.swift', ['build'])
})
