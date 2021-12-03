/* eslint-disable no-unused-vars */
import axios from 'axios';
import { ERROR_MESSAGES } from './RestReceiver';

const { getError, postError, putError, deleteError } = ERROR_MESSAGES;

function runGETusers(baseUrl, fetchState) {
  return axios
    .get(baseUrl)
    .then((resNotes) => resNotes.data)
    .catch((err) => new Error(getError))
    .finally(() => fetchState(false));
}

function runPOSTuser(baseUrl, obj) {
  return axios
    .post(baseUrl, obj)
    .then((res) => res.data)
    .catch((err) => new Error(postError));
}

function runUpdateUser(baseUrl, { ...updateUser }) {
  return axios
    .put(`${baseUrl}`, updateUser)
    .then((res) => res.data)
    .catch((err) => new Error(putError));
}

function runDELETEuser(baseUrl, id) {
  return axios
    .delete(`${baseUrl}/${id}`)
    .then((res) => res.data)
    .catch((err) => new Error(deleteError));
}

export { runGETusers, runPOSTuser, runUpdateUser, runDELETEuser };
