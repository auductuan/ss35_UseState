import React, { useState } from 'react';

const B5: React.FC = () => {
  // Khởi tạo state cho giá trị input
  const [inputValue, setInputValue] = useState('');

  // Hàm xử lý khi người dùng nhập giá trị
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <form>
        <label htmlFor="userInput">Enter something: </label>
        <input
          type="text"
          id="userInput"
          value={inputValue}
          onChange={handleInputChange}
        />
      </form>
      <p>You entered: {inputValue}</p>
    </div>
  );
};

export default B5;
