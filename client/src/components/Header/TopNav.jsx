import React from 'react';

import NavLink from './NavLink';

import { TOP_NAV_LIST } from '../../constant/navList';

const TopNav = ({ prefix }) => {
  return (
    <nav className='nav-bar__topnav'>
      {TOP_NAV_LIST.map(({ to, title }, i) =>
        <NavLink key={i} to={prefix + to} className='nav-item' actClass='nav-item--active'>{title}</NavLink>)
      }
    </nav>
  );
}

export default TopNav;
