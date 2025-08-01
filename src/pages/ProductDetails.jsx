import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const { title, description, image } = state || {};

  if (!state) {
    return <p className="p-10 text-red-500">No product data found.</p>;
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <img src={image} alt={title} className="w-full max-w-md h-64 object-cover rounded-md" />
      <p className="mt-4 text-gray-700">{description}</p>
    </div>
  );
};

export default ProductDetails;
