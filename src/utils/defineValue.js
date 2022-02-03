const defineValue = (value) => {
  if (/^\d+$/.test(value)) {
    return 'isNumber';
  }
  if (/^[a-zа-яё\s]+$/i.test(value)) {
    return 'isString';
  }
  return 'isCombined';
};

export default defineValue;
