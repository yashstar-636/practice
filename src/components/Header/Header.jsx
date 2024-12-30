import React from 'react'
import logo from "./netflix-logo-redon-black-l2sdc7dpfo35m127.jpeg"
import { Link } from 'react-router-dom';
import { ImSearch } from 'react-icons/im';
const Header = () => {
  return (
    <nav className='header'>
      <img  src={logo} alt='logo'/>
      <div>
        <Link to='/tvshows'>TV Shows</Link>
        <Link to='/movies'>Movies</Link>
        <Link to='/recentlyadded'>Recently Added</Link>
        <Link to='/mylist'>My List</Link>
      </div>
      <ImSearch className='imsearch'/>
    </nav> 
  );
};

export default Header