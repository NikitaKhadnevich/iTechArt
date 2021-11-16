const callToEditNote = (buttonId, matchSource) => {
  let arrNoteReciever = matchSource;
  const toggleItem = (arr, id) => {
    arrNoteReciever = arr.map((note) =>
      note.id === id
        ? { ...note, isActive: !note.isActive, isChange: !note.isChange }
        : { ...note, isActive: false, isChange: false }
    );
  };
  toggleItem(arrNoteReciever, buttonId);
  return arrNoteReciever;
};

export default callToEditNote;
