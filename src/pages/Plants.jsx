import React from 'react';
import Cards from '../components/Cards';
import plantbanner from "../assets/waterplants.png";
import plant1 from '../assets/pantsimg.png'; 
import plant2 from '../assets/plantimg2.png';

const Plants = () => {
  const PlantsData = [
    {
      id: 1,
      title: 'Goldplant',
      description: 'A radiant freshwater plant that adds a golden glow to any aquarium or indoor setup. Ideal for beginners and seasoned gardeners alike. Its peaceful nature and vivid hues make it a perfect choice for enhancing visual appeal.',
      image: plant1,
    },
    {
      id: 2,
      title: 'Clownplant',
      description: 'A vibrant and playful plant reminiscent of the ocean’s colorful reefs. Inspired by the Clownfish habitat, this plant thrives in humid environments and adds a splash of character to any plant collection.',
      image: plant2,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Banner */}
    <div className="w-full h-60 md:h-80 lg:h-96 relative overflow-hidden">
  {/* Banner Image */}
  <img
    src={plantbanner}
    alt="Plant Banner"
    className="w-full h-full object-cover"
  />

  {/* Overlay Text */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/40">
    <h2 className="text-3xl md:text-4xl font-bold text-white">
      Explore Our Aquarium Plants
    </h2>
    <p className="mt-2 text-white text-sm md:text-base max-w-2xl">
      Hand-picked aquatic plants to bring life and balance to your underwater world.
    </p>
  </div>
</div>


      {/* Card Grid */}
      <div className="max-w-6xl mx-auto px-4  pt-5 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {PlantsData.map((plant) => (
          <Cards
            key={plant.id}
            id={plant.id}
            title={plant.title}
            description={plant.description}
            image={plant.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Plants;
