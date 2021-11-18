const shareHelper = (noteId, currentArray) => {
  const sortDescription = currentArray.filter((item) => item.id === noteId);
  const timeNow = new Date().toLocaleString();
  const [sharedTimeArr] = sortDescription.map((item) => ({
    ...item,
    sharedTime: timeNow,
  }));

  return sharedTimeArr;
};

export default shareHelper;
