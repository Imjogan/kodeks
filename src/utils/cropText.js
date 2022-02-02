const cropText = (str) => {
  if (str.length > 20) {
    return str.slice(0, 5) + '...' + str.slice(-5);
  }
  return str;
};

export default cropText;
