import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Fishes from './pages/Fishes';
import ProductDetails from './pages/ProductDetails';
import Plants from './pages/Plants';
import Aquarium from './pages/Aquarium';
import Rocks from './pages/Rocks';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Fishes />} />
        <Route path="/plants" element={<Plants/>}/>
        <Route path="/aquarium" element={<Aquarium/>}/>
         <Route path="/rocks" element={<Rocks/>}/>
         <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
