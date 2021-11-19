const removeShareNote = (noteId, sharedArray) => {
  const removeNote = sharedArray.filter((item) => item.id !== noteId);
  return removeNote;
};

export default removeShareNote;
