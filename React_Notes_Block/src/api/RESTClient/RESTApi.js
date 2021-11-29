/* eslint-disable no-unused-vars */
import axios from 'axios';
import { ERROR_MESSAGES } from './RestReceiver';

const { getError, postError } = ERROR_MESSAGES;

function runGETusers(baseUrl) {
  axios
    .get(baseUrl)
    .then((res) => res.json())
    .catch((err) => new Error(getError));
}

function runPOSTuser(baseUrl, obj) {
  return axios
    .post(baseUrl, obj)
    .then((res) => res.data) // Результат ответа от сервера)
    .catch((err) => new Error(postError));
}
export { runGETusers, runPOSTuser };

//  Will use in next push
// letPATCH(baseUrl, obj, id) {
//   return axios
//     .patch(`${baseUrl}` + `/` + `${id}`, obj)
//     .then((res) => console.log(res)) // Результат ответа от сервера
//     .catch((err) => new Error("Ошибка в запросе PATCH"));
// }

// letDELETE(baseUrl, id) {
//   return axios
//     .delete(`${baseUrl}` + `/` + `${id}`)
//     .then((res) => console.log(res))s
//     .catch((err) => new Error("Ошибка в запросе DELETE"));
// }
