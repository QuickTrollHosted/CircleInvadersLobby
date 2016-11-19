// gulpfile.js
var gulp = require('gulp');
var server = require('gulp-express');

gulp.task('server', function () {
    // Start the server at the beginning of the task
    server.run(['index.js']);

    // Restart the server when file changes
    gulp.watch(['**/*.html', 'images/**/*'], server.notify);
    gulp.watch(['styles/**/*.scss'], ['styles:scss']);
    //gulp.watch(['{.tmp,app}/styles/**/*.css'], ['styles:css', server.notify]);
    //Event object won't pass down to gulp.watch's callback if there's more than one of them.
    //So the correct way to use server.notify is as following:
    gulp.watch(['{.tmp,app}/styles/**/*.css'], function(event){
        gulp.run('styles:css');
        server.notify(event);
    });

    gulp.watch(['scripts/**/*.js'], ['jshint']);
    gulp.watch(['index.js', 'routes/**/*.js'], [server.run]);
});
