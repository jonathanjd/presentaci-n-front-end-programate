var gulp = require("gulp");
var browserSync = require("browser-sync").create();

// Static Server + watching scss/html files
gulp.task("serve", function() {
    browserSync.init({
        server: "./",
        port: 8000, //Or whatever port you want for your application
        ui: {
            port: 8001 //Or whatever port you want for browsersync ui
        }
    });

    gulp.watch("./*.html").on("change", browserSync.reload);
});
