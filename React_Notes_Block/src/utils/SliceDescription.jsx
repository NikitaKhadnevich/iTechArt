import { SHORT_DESC } from '../config/constants/initNoteData';

const sliceDescription = (description) => {
  const { limit, after } = SHORT_DESC;
  const shortDesc = description.slice(0, limit) + after;
  return shortDesc;
};

export default sliceDescription;
