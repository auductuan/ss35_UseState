import React, { useState } from 'react';

const B6: React.FC = () => {
  // Khởi tạo state cho bộ đếm
  const [count, setCount] = useState(0);

  // Hàm xử lý tăng bộ đếm
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Hàm xử lý giảm bộ đếm
  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default B6;
