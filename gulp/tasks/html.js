import fileInclude from "gulp-file-include";
import versionNumber from "gulp-version-number";
// импорт для подключения картинок в формате webp пока баг
// import webpHtmlNoswg from "gulp-webp-html-nosvg";

export const html = () => {
  return (
    app.gulp.src(app.path.src.html)
      .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
          title: "HTML",
          message: "Error: <%= error.message %>"
        })
      ))
      .pipe(fileInclude())
      .pipe(app.plugins.replace(/@img\//g, "..img/"))
      // подключения картинок в формате webp пока баг
      // .pipe(webpHtmlNosvg())
      .pipe(
        versionNumber({
          value: "%DT%",
          append: {
            key: "-v",
            cover: 0,
            to: ["css", "js"],
          },
          'output': {
            'file': 'gulp/verson.json'
          }
        })
      )
      .pipe(app.gulp.dest(app.path.build.html))
      .pipe(app.plugins.browsersync.stream())
  );
};
