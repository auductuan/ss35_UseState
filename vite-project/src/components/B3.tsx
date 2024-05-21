import React, { useState } from 'react';

const B3: React.FC = () => {
  // Khởi tạo state cho màu chữ
  const [color, setColor] = useState('black');

  // Hàm xử lý khi nhấn nút
  const changeColor = () => {
    setColor(prevColor => prevColor === 'black' ? 'red' : 'black');
  };

  return (
    <div>
      <p style={{ color: color }}>This is a sample text</p>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

export default B3;
