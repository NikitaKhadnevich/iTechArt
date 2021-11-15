const setToLocalStorage = (targetState) => {
  localStorage.setItem('NoteData', JSON.stringify(targetState));
};

export const getToLocalStorage = () => {
  const raw = localStorage.getItem('NoteData');
  const noteData = JSON.parse(raw);
  return noteData;
};

export default setToLocalStorage;
