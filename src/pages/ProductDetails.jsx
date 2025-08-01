import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { state } = useLocation();
  const { id } = useParams();

  if (!state) {
    return (
      <div className="p-10 text-red-600 font-bold">
        Product data not found. Please go back and click a product.
      </div>
    );
  }

  const { title, image, description } = state;

  return (
    <div className="p-20 max-w-3xl mx-auto bg-white shadow-lg rounded-xl">
      <img
        src={image}
        alt={title}
        className="w-full h-80 object-cover rounded-md"
      />
      <h1 className="text-3xl font-bold mt-6 mb-2">{title}</h1>
      <p className="text-gray-700 text-justify leading-relaxed">{description}</p>
    </div>
  );
};

export default ProductDetails;
