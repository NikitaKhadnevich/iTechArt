const getSortNotesDate = (asc, desc, currentNoteState, stateChanger) => {
  const sortNote = [...currentNoteState];
  sortNote.sort((a, b) => {
    const notesDateA = Date.parse(a.date);
    const notesDateB = Date.parse(b.date);
    if (notesDateA > notesDateB) {
      return asc;
    }
    if (notesDateB > notesDateA) {
      return desc;
    }
    return 0;
  });
  stateChanger(sortNote);
};

const getSortNotesTitle = (asc, desc, currentNoteState, stateChanger) => {
  const sortNote = [...currentNoteState];
  sortNote.sort((a, b) => {
    const notesTitleA = a.title;
    const notesTitleB = b.title;
    if (notesTitleA > notesTitleB) {
      return asc;
    }
    if (notesTitleB > notesTitleA) {
      return desc;
    }
    return 0;
  });
  stateChanger(sortNote);
};

export { getSortNotesDate, getSortNotesTitle };
