import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return <>
   <nav>Get Ready to complete your daily goals</nav>;
    <div className='header'>
      <Link to="/home">home</Link>
      <Link to="/about">about</Link>
      <Link to="/contact"> contact</Link>
    </div>
  </>
};

export default Header;