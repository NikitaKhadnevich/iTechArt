/* eslint-disable no-unused-expressions */
const deleteNote = (id, currentState) => {
  const MIN_LENGTH = 1;
  const updateArray = [...currentState];
  updateArray.length !== MIN_LENGTH
    ? updateArray.splice(id, 1)
    : updateArray.splice(0);
  return updateArray;
};

export default deleteNote;
