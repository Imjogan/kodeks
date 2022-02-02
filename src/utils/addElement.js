import { nanoid } from 'nanoid';

const addElement = (state, value) => {
  if (state.some((element) => element.text === value)) {
    return state.map((element) => {
      if (element.text === value) {
        return { ...element, count: element.count + 1 };
      }
      return element;
    });
  }
  return [...state, { id: nanoid(), count: 1, text: value, date: new Date() }];
};

export default addElement;
