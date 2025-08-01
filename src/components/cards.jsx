import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ id, title, description, image }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const threshold = 12;

  const handleMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setTilt({ x: y * -threshold, y: x * threshold });
  };

  const handleLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <Link
      to={`/product/${id}`}
      state={{ title, image, description }}
      className="max-w-xs w-full"
    >
      <div
        className="rounded-xl shadow-xl overflow-hidden transition-transform duration-200 ease-out cursor-pointer bg-white"
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        {/* 🔥 Image Section: Fixed height for all */}
        <div className="w-full h-52 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <h3 className="mt-3 px-4 pt-3 mb-1 text-lg font-semibold text-gray-800">
          {title}
        </h3>
        <p className="text-sm px-4 pb-6 text-gray-600 w-5/6">
          {description.slice(0, 80)}...
        </p>
      </div>
    </Link>
  );
};

export default Cards;
