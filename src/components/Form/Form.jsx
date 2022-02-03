import './Form.css';
import { useState, useCallback } from 'react';

function Form({ handleStateLift }) {
  const [value, setValue] = useState('');

  const handleInputChange = useCallback(
    (evt) => {
      setValue(evt.target.value);
    },
    [setValue]
  );

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (value.trim() !== '') {
      handleStateLift(value.trim());
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        onChange={handleInputChange}
        value={value}
        className="form__input"
        placeholder="Пишите здесь..."
      />
    </form>
  );
}

export default Form;
