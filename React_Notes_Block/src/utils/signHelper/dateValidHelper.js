import { parse, isDate } from 'date-fns';

const today = new Date();

const parseDateString = (value, originalValue) => {
  const parsedDate = isDate(originalValue)
    ? originalValue
    : parse(originalValue, 'yyyy.mm.dd', new Date());
  return parsedDate;
};

export { today, parseDateString };
