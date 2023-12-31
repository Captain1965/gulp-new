//Основной модуль 
import gulp from "gulp";
// Импорт путей
import { path } from ".//gulp/config/path.js";

// Импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js";

// Передаем значения в глобальную переменную
global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins
}

// импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";


//Наблюдатель за изменениями в файлах
function watcher() {
  gulp.watch(path.watch.files, copy)
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);


}

//Построение сценариев выполнения задач
const mainTasks = gulp.parallel(copy, html, scss, js);
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

// выполняется сценарий по умолчанию
gulp.task('default', dev);
