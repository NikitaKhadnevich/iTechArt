/* eslint-disable no-unused-expressions */
const deleteNote = (id, currentState) => {
  const MIN_LENGTH = 1;
  const deleteArray = [...currentState];
  deleteArray.length !== MIN_LENGTH
    ? deleteArray.splice(id, 1)
    : deleteArray.splice(0);
  return deleteArray;
};

export default deleteNote;
