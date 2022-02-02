const defineValue = (value) => {
  if (/^[0-9]+$/.test(value)) {
    return 'isNumber';
  }
  if (/(?=.*\d)(?=.*[а-яА-ЯёЁa-zA-Z\s])/i.test(value)) {
    return 'isCombined';
  }
  return 'isString';
};

export default defineValue;
