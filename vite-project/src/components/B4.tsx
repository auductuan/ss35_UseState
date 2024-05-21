import React, { useState } from 'react';

const B4: React.FC = () => {
  // Khởi tạo state cho trạng thái ẩn/hiện của tiêu đề
  const [isVisible, setIsVisible] = useState(true);

  // Hàm xử lý khi nhấn nút
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      {isVisible && <h1>This is a toggleable heading</h1>}
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'} Heading
      </button>
    </div>
  );
};

export default B4;
