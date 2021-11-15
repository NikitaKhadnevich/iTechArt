const chooseNote = (itemId, matchSource) => {
  let arrNoteReciever = [...matchSource];
  const toggleItem = (arr, id) => {
    arrNoteReciever = arr.map((note) =>
      note.id === id
        ? { ...note, isActive: !note.isActive, isChange: false }
        : { ...note, isActive: false, isChange: false }
    );
  };
  toggleItem(arrNoteReciever, itemId);
  return arrNoteReciever;
};

export default chooseNote;
