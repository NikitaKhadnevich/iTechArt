const setToLocalStorage = (targetState, localName) => {
  localStorage.setItem(localName, JSON.stringify(targetState));
};

const getToLocalStorage = (localName) => {
  const raw = localStorage.getItem(localName);
  const noteData = JSON.parse(raw);
  return noteData;
};

export { setToLocalStorage, getToLocalStorage };
