import React from 'react';
import Cards from "../components/cards"
import rockBanner from "../assets/rocks.png"; // update with correct image
import rock1 from '../assets/rockimg2.webp'; // update with actual rock images
import rock2 from '../assets/rockimg2.webp';

const Rocks = () => {
  const RocksData = [
    {
      id: 7,
      title: 'Riverstone',
      description: 'Smooth and naturally polished, Riverstones bring a serene and earthy aesthetic to aquariums or indoor plant bases. Excellent for enhancing substrate appeal and providing a calming natural look.',
      image: rock1,
    },
    {
      id: 8,
      title: 'Lava Rock',
      description: 'Porous and lightweight, Lava Rocks are ideal for aquatic setups and provide excellent surfaces for beneficial bacteria. Their rugged texture adds dramatic character to any arrangement.',
      image: rock2,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Banner */}
    <div className="w-full h-60 md:h-80 lg:h-96 relative overflow-hidden">
  {/* Banner Image */}
  <img
    src={rockBanner}
    alt="Rock Banner"
    className="w-full h-full object-cover"
  />

  {/* Overlay Text */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/40">
    <h2 className="text-3xl md:text-4xl font-bold text-white">
      Discover Aquarium Rocks
    </h2>
    <p className="mt-2 text-white text-sm md:text-base max-w-2xl">
      Carefully selected rocks to enhance the beauty and stability of your aquatic landscape.
    </p>
  </div>
</div>

      {/* Card Grid */}
      <div className="max-w-6xl mx-auto  pt-5 px-4 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {RocksData.map((rock) => (
          <Cards
            key={rock.id}
            id={rock.id}
            title={rock.title}
            description={rock.description}
            image={rock.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Rocks;
