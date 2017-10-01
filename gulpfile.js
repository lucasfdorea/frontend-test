const gulp 		= require("gulp");
const sass 		= require("gulp-sass");
const notify 	= require("gulp-notify");


gulp.task("sass", function(){
	return gulp.src('./app/scss/style.scss')
				.pipe(sass())
				.on("error", notify.onError({title:"erro ao compilar", message:"<%= error.message %>"}))
				.pipe(gulp.dest("./app/css"))
});

gulp.task("sass:watch", function(){
	gulp.watch("./app/scss/**/*.scss", ['sass']);
});


gulp.task("default",['sass', 'sass:watch']);