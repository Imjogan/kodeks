import './Input.css';
import { useState, useCallback } from 'react';

function Input({ handleInputStateLift }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = useCallback(
    (evt) => {
      setInputValue(evt.target.value);
    },
    [setInputValue]
  );

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (inputValue.trim() !== '') {
      handleInputStateLift(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        onChange={handleInputChange}
        value={inputValue}
        className="form__input"
        placeholder="Пишите здесь..."
      />
    </form>
  );
}

export default Input;
