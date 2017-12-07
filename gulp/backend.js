/**
 * Created by kevingu on 4/2/16.
 */
const nodemon = require('gulp-nodemon');
const shell = require('gulp-shell');
const mocha = require('gulp-mocha');
const exit = require('gulp-exit');
const gulp = require('gulp');
const jshint = require('gulp-jshint');


/* Serve the server. gulp-nodemon is used for automatic
 * restarting upon changes to *.js files, excluding tests.
 * Note: do not start directories with ./ in watch and ignore
 */
gulp.task('serve:backend', function() {
    return nodemon({
        script: 'app.js',
        watch: ['server/**/*.js'],
        ignore: ['server/test/**/*.js']
    })
        .on('restart', function() {
            console.log('Server restarting. Please wait.');
        });
});

/* Use foreman to serve the server, allowing gulp-nodemon
 * to automatically access the .env file.
 */
gulp.task('backend', function() {
    return gulp.src('')
        .pipe(shell('nf run gulp serve:backend'))
});

/* This will run our mocha tests */
gulp.task('test:server', function(){
    return gulp.src('server/test/*.js', {read: false})
        .pipe(mocha({reporter: 'spec'}))
        .pipe(exit());
});

gulp.task('lint:server', function() {
    return gulp.src('./server/**/*.js')
           .pipe(jshint())
           .pipe(jshint.reporter('default'))
});


gulp.task('default', ['lint:server', 'test:server', 'serve:backend']);
