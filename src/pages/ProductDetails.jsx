import React from 'react';
import { useLocation, useParams } from 'react-router-dom';


const ProductDetails = () => {
  const { id } = useParams();
  const { state } = useLocation();

  // Either from state or fallback using ID lookup
  const product = state || allProducts.find((item) => item.id === Number(id));

  if (!product) {
    return <p className="p-10 text-red-500">Product not found.</p>;
  }

  const { title, description, image } = product;

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <img src={image} alt={title} className="w-full max-w-md h-64 object-cover rounded-md" />
      <p className="mt-4 text-gray-700">{description}</p>
    </div>
  );
};

export default ProductDetails;
