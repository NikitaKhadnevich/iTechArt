const removeDuplicates = (notestArray, key) =>
  notestArray.reduce((noteArrForFiltred, noteItem) => {
    const clearNotes = noteArrForFiltred.filter(
      (i) => i[key] !== noteItem[key]
    );
    return [...clearNotes, noteItem];
  }, []);

export default removeDuplicates;
