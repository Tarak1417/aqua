import React from 'react';
import Cards from '../components/Cards';
import fishbanner from "../assets/fishBanner.png";
import fish1 from "../assets/fish1.png";
import fish2 from "../assets/fish2.png";

const Fishes = () => {
  const fishData = [
    {
      id: 1,
      title: 'Goldfish',
      description: 'Bright and peaceful freshwater fish.',
      image: fish1,
    },
    {
      id: 2,
      title: 'Clownfish',
      description: 'Colorful saltwater fish made famous by Nemo.',
      image: fish2,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Banner */}
      <div className="w-full h-60 md:h-80 lg:h-96 relative overflow-hidden">
        {/* Banner Image */}
        <img
          src={fishbanner}
          alt="Fish Banner"
          className="w-full h-full object-cover"
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/40">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Explore Our Aquarium Fishes
          </h2>
          <p className="mt-2 text-white text-sm md:text-base lg:text-lg max-w-2xl">
            Hand-picked aquatic fishes to bring life and balance to your underwater world.
          </p>
        </div>
      </div>

      {/* Card Grid with spacing above */}
      <div className="max-w-6xl mx-auto px-4 p-5 pb-10 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {fishData.map((fish) => (
          <Cards
            key={fish.id}
            id={fish.id}
            title={fish.title}
            description={fish.description}
            image={fish.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Fishes;
