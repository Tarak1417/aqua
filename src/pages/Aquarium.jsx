import React from 'react';
import Cards from "../components/cards"
import aquariumBanner from '../assets/Aquariumstanks.png';
import aquaaqua1 from '../assets/aquariumimg2.png';
import aquaaqua2 from '../assets/aquariuming1.png';

const Aquarium = () => {
  const aquariumaquas = [
    {
      id: 3,
      title: 'Anubias Nana',
      description:
        'A hardy aquatic aqua that thrives in low light and adds lush greenery to freshwater aquariums. Perfect for beginners and aquascapers.',
      image: aquaaqua1,
    },
    {
      id: 4,
      title: 'Java Fern',
      description:
        'A popular aquarium aqua with wide, flowing leaves. Attaches easily to driftwood and rocks. Low maintenance and ideal for aquaed tanks.',
      image: aquaaqua2,
    },
  ];

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Banner */}
     <div className="w-full h-60 md:h-80 lg:h-96 relative overflow-hidden">
  {/* Banner Image */}
  <img
    src={aquariumBanner}
    alt="Aquarium Banner"
    className="w-full h-full object-cover"
  />

  {/* Overlay Text */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/40">
    <h2 className="text-3xl md:text-4xl font-bold text-white">
      Explore Our Aquarium
    </h2>
    <p className="mt-2 text-white text-sm md:text-base max-w-2xl">
      Hand-picked aquatic aquas to bring life and balance to your underwater world.
    </p>
  </div>
</div>

      {/* Card Grid */}
      <div className="max-w-6xl mx-auto px-4  pt-0 lg:pt-5 md:pt-5 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {aquariumaquas.map((aqua) => (
          <Cards
            key={aqua.id}
            id={aqua.id}
            title={aqua.title}
            description={aqua.description}
            image={aqua.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Aquarium;
