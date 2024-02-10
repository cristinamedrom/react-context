import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

const Navbar = () => {
  return (
    <nav className='navbarall'>
      <p>
          <Link to="/">Back</Link>
      </p>
    </nav>
  );
};

export default Navbar;