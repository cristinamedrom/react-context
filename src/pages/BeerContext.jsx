import React, { createContext, useState, useEffect } from 'react';


const BeerContext = createContext();

const BeerProvider = ({ children }) => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await fetch('https://api.punkapi.com/v2/beers');
        const data = await response.json();
        setBeers(data);
      } catch (error) {
        console.error('Error fetching beers:', error);
      }
    };

    fetchBeers();
  }, []);

  return (
    <BeerContext.Provider value={{ beers }}>
      {children}
    </BeerContext.Provider>
  );
};

export { BeerProvider, BeerContext };