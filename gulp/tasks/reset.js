import del from 'del';
export const reset = () => {
  return del(app.path.clean);
};

// Для плагина del версии 7, вставляем это в reset: 

// import {deleteAsync} from "del"
// export const reset = () => {
//     return deleteAsync(['dist'])
// }