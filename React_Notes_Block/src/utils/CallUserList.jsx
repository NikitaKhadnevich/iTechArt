const CallUserList = (itemId, matchSource) => {
  let arrNoteReciever = matchSource;
  const toggleItem = (notesArray, id) => {
    arrNoteReciever = notesArray.map((note) =>
      note.id === id
        ? { ...note, isShared: !note.isShared, isActive: true }
        : { ...note, isShared: false, isActive: false }
    );
  };
  toggleItem(arrNoteReciever, itemId);
  return arrNoteReciever;
};
export default CallUserList;
