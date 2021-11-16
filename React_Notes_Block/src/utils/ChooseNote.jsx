const chooseNote = (itemId, matchSource) => {
  let arrNoteReciever = matchSource;
  const toggleItem = (notesArray, id) => {
    arrNoteReciever = notesArray.map((note) =>
      note.id === id
        ? { ...note, isActive: !note.isActive, isChange: false }
        : { ...note, isActive: false, isChange: false }
    );
  };
  toggleItem(arrNoteReciever, itemId);
  return arrNoteReciever;
};

export default chooseNote;
