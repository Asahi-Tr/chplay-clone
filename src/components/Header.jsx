import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

import SearchBar from './commons/SearchBar';

const Header = () => {

  return (
    <Router>
      <header>
        <header className='header' >
          <div className='header__left'>
            <Link className='logo' to="/">
              <img src="https://www.gstatic.com/android/market_images/web/play_prism_hlock_2x.png" alt="" />
            </Link>
            <SearchBar className='search-input' />
          </div>

          <div className='header__right'>
            <Link to='/login'>
              Login
            </Link>
            <div className='avatar'>
              <img src="data:image/jpeg;base64,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" alt="" />
            </div>
          </div>
        </header>

        <div className='nav-bar'>
          <Link to='/store' className='nav-bar__head'>
            {'Apps & Games'}
          </Link>

          <div className='nav-bar__sidebar'>
            <nav className='sidebar-nav'>
              <Link className='nav-link' to='/'>Apps</Link>
              <Link className='nav-link' to='/'>Games</Link>
              <Link className='nav-link' to='/'>Installeds</Link>
            </nav>

            <nav className='sidebar-subnav'>
              <Link className='nav-link nav-link--small' to='/'>Account</Link>
              <Link className='nav-link nav-link--small' to='/'>Payment methods</Link>
              <Link className='nav-link nav-link--small' to='/'>My subscribtions</Link>
              <Link className='nav-link nav-link--small' to='/'>Redeem</Link>
              <Link className='nav-link nav-link--small' to='/'>My wishlist</Link>
              <Link className='nav-link nav-link--small' to='/'>My play activity</Link>
              <Link className='nav-link nav-link--small' to='/'>Parent Guide</Link>
            </nav>
          </div>
        </div>

      </header>


    </Router>

  );
}

export default Header;
