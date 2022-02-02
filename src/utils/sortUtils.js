export const sortOptions = [
  { key: 'date', label: 'По времени добавления' },
  { key: 'text', label: 'По алфавиту' },
];

export const sortFunctions = {
  date: (a, b) => a - b,
  text: (a, b) => a.localeCompare(b),
};
