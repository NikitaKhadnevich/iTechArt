import { parseDateOptions } from '../../config/constants/initNoteData';

const shareHelper = (noteId, currentArray) => {
  const sortDescription = currentArray.filter(
    (itemNote) => itemNote.id === noteId
  );

  const timeNow = new Date().toLocaleString('en-US', parseDateOptions);
  const [sharedTimeArr] = sortDescription.map((itemNote) => ({
    ...itemNote,
    sharedTime: timeNow,
  }));
  return sharedTimeArr;
};

export default shareHelper;
