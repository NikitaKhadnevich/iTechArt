/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import { ERROR_MESSAGES } from './RestReceiver';
import { NOTES_URL, INFINITY_COUNTER } from './apiConstants';

const { getError, postError, putError, deleteError } = ERROR_MESSAGES;

function runGETusers(baseUrl) {
  return axios
    .get(baseUrl)
    .then((resNotes) => resNotes.data)
    .catch((err) => new Error(getError));
}

function runGETInfinityNotes({ pageParam = 1 }) {
  return axios
    .get(`${NOTES_URL}?_limit=${INFINITY_COUNTER}&_page=${pageParam}`)
    .then((resNotes) => resNotes)
    .catch((err) => new Error(getError));
}

function runPOSTuser(baseUrl, postData) {
  return axios
    .post(baseUrl, postData)
    .then((resNotes) => resNotes.data)
    .catch((err) => new Error(postError));
}

function runUpdateUser(baseUrl, { ...updateUser }) {
  return axios
    .put(baseUrl, updateUser)
    .then((resNotes) => resNotes.data)
    .catch((err) => new Error(putError));
}

function runDELETEuser(baseUrl, id) {
  return axios
    .delete(`${baseUrl}/${id}`)
    .then((resNotes) => resNotes.data)
    .catch((err) => new Error(deleteError));
}

export {
  runGETusers,
  runPOSTuser,
  runUpdateUser,
  runDELETEuser,
  runGETInfinityNotes,
};
