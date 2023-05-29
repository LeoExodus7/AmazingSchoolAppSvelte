export const sort = (array, key, order) => {
    const returnValue = order === 'desc' ? 1 : -1;
  
    return array.sort((a, b) => a[key] > b[key] ? returnValue * -1 : returnValue);
  };
  