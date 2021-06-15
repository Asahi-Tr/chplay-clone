import React from 'react';

import NavLink from './NavLink';

import navList from '../../constant/navList';

const TopNav = ({ prefix }) => {
  return (
    <nav className='nav-bar__topnav'>
      {navList.topNav.map(({ to, title }, i) =>
        <NavLink key={i} to={prefix + to} className='nav-item' actClass='nav-item--active'>{title}</NavLink>)
      }
    </nav>
  );
}

export default TopNav;
