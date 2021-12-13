const saveEditedNote = (buttonId, matchSource, value) => {
  let arrNoteReciever = matchSource;
  const toggleItem = (notesArray, id) => {
    arrNoteReciever = notesArray.map((note) =>
      note.id === id
        ? { ...note, description: value, isChange: false }
        : { ...note, isChange: false }
    );
  };
  toggleItem(arrNoteReciever, buttonId);
  return arrNoteReciever;
};

export default saveEditedNote;
