import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BeerProvider } from './pages/BeerContext';
import Navbar from './pages/Navbar';
import BeerList from './pages/BeerList';
import BeerDetails from './pages/BeerDetails';

const App = () => {
  return (
    <Router>
      <BeerProvider>
      <Navbar />
        <Routes>
          <Route path="/details/:beerId" element={<BeerDetails />} />
          <Route path="/" element={<BeerList />} />
        </Routes>
      </BeerProvider>
    </Router>
  );
};

export default App;
