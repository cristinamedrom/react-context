import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { BeerContext } from './BeerContext';
import "../App.css";

const BeerDetails = () => {
  const { beers } = useContext(BeerContext);
  const { beerId } = useParams();
  const beer = beers.find((beer) => beer.id === parseInt(beerId, 10));

  if (!beer) {
    return <div>Beer not found</div>;
  }

  return (
    <div>
      <h1>{beer.name}</h1>
      <p>Tagline: {beer.tagline}</p>
      <p>First Brewed: {beer.first_brewed}</p>
      <p>Description: {beer.description}</p>
      <p>ABV: {beer.abv}%</p>
      <img src={beer.image_url} alt={beer.name} style={{ width: '100px', height: 'auto' }} />
    </div>
  );
};

export default BeerDetails;
