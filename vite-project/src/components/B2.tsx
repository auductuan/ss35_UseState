import React, { useState } from 'react';

// Định nghĩa kiểu dữ liệu cho product
interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const B2: React.FC = () => {
  // Khởi tạo state với giá trị là một đối tượng product
  const [product, setProduct] = useState<Product>({
    id: 1,
    name: 'Sample Product',
    price: 100,
    quantity: 10
  });

  return (
    <div>
      <h1>Product Name: {product.name}</h1>
    </div>
  );
};

export default B2;
