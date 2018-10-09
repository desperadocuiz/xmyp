let gulp = require("gulp");
let concat = require("gulp-concat");
let sass = require("gulp-sass")

gulp.task("copy-sass",function(){
	gulp.src("*.scss")
	.pipe(sass())
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\test1"))
})
gulp.task("copy-html",function(){
	
	gulp.src("*.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\test1"))
})
gulp.task("copy-css",function(){
	gulp.src("css/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\test1\\css"))
})
gulp.task("copy-js",function(){
	gulp.src("js/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\test1\\js"))
})
//合并js文件
gulp.task("concat-js",function(){
	gulp.src(["js/index.js","js/login.js"])//来源
	.pipe(concat("common.js"))//经过合并
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\test1\\js"))	
});
//图片
gulp.task("copy-img",function(){
	gulp.src("img/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\test1\\img"))
})
//php文件
gulp.task("copy-php",function(){
	gulp.src("php/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\test1\\php"))
})

//实时监测
gulp.task("watch",function(){
	gulp.watch("*.html",["copy-html"]);
	gulp.watch("css/**/*",["copy-css"]);
	gulp.watch("js/**/*",["copy-js"]);
	gulp.watch("img/**/*",["copy-img"]);
	gulp.watch("php/**/*",["copy-php"]);
	gulp.watch("*.scss",["copy-sass"]);
})
