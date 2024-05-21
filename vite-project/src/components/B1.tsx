import React, { useState } from 'react';

const B1: React.FC = () => {
  // Khởi tạo state với giá trị là tên của tôi
  const [name, setName] = useState('ChatGPT');

  return (
    <div>
      <h1>Hello, my name is {name}</h1>
    </div>
  );
};

export default B1;
