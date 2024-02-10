import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BeerContext } from './BeerContext';
import "../App.css";

const BeerList = () => {
  const { beers } = useContext(BeerContext);

  return (
    <div>
      <h1>Beer List 🍻</h1>
      <div  className='beersall'>
        {beers.map((beer) => (
          <div className='beerindv' key={beer.id}>
            <Link to={`/details/${beer.id}`}>
              <div>
                <img src={beer.image_url} alt={beer.name} style={{ width: '50px', height: 'auto' }} />
              </div>
              <div>{beer.name}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeerList;
