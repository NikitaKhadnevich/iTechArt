const removeShareNote = (noteId, sharedNotesay) => {
  const removeNote = sharedNotesay.filter((itemNote) => itemNote.id !== noteId);
  return removeNote;
};

export default removeShareNote;
