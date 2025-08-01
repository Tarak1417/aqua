import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="text-sm text-white w-full fixed z-50" >
     
      {/* Navigation Bar */}
      <nav className="relative  h-[70px] flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 bg-white text-gray-900 transition-all shadow">
     <h1 className='text-[blue] font-bold'>Aqua</h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-8 md:pl-28">
         
          <li className="hover:text-blue-500 cursor-pointer" ><a href="/">fishes</a></li>
          <li className="hover:text-blue-500 cursor-pointer"><a href="/plants">pants</a></li>
          <li className="hover:text-blue-500 cursor-pointer"><a href="/aquarium">aqarium</a></li>
          <li className="hover:text-blue-500 cursor-pointer"><a href="/rocks">rocks</a></li>
        </ul>

        {/* Desktop Button */}
        <button className="md:inline hidden bg-white hover:bg-gray-50 border border-gray-300 ml-20 px-9 py-2 rounded-full active:scale-95 transition-all">
          Get started
        </button>

        {/* Mobile Menu Toggle */}
        <button
          aria-label="menu-btn"
          type="button"
          className="menu-btn inline-block md:hidden active:scale-90 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
            <path d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2z" />
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`mobile-menu absolute top-[70px] left-0 w-full bg-white shadow-sm p-6 md:hidden transition-all ${
            menuOpen ? '' : 'hidden'
          }`}
        >
          <ul className="flex flex-col space-y-4 text-lg">
          <li className="hover:text-blue-500 cursor-pointer"><a href="/">fishes</a></li>
          <li className="hover:text-blue-500 cursor-pointer"><a href="/plants">pants</a></li>
          <li className="hover:text-blue-500 cursor-pointer"><a href="/aquarium">aqarium</a></li>
          <li className="hover:text-blue-500 cursor-pointer"><a href="/rocks">rocks</a></li>
          </ul>

          <button
            type="button"
            className="bg-white text-gray-600 border border-gray-300 mt-6 text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full"
          >
            Get started
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
