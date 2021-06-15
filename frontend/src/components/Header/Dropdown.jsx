import { useEffect, useState } from 'react';

import {
  useLocation
} from 'react-router-dom';

import NavLink from './NavLink';

const Dropdown = ({ listItem }) => {
  let location = useLocation();
  let [dropdownTitle, setDropdownTitle] = useState('Categories');

  useEffect(() => {
    let matchUrl = listItem.find(e => e.to === location.pathname);
    let title = matchUrl ? matchUrl.title : 'Categories';
    setDropdownTitle(title);
  }, [location, listItem]);

  return (
    <div className='dropdown'>
      <p className='dropdown__title'>{dropdownTitle}</p>
      <i className="fas fa-chevron-down"></i>
      <ul className='dropdown__list'>
        {listItem.map(({ to, title }, i) =>
          <NavLink actClass='nav-link--active' className='nav-link nav-link--small' key={i} to={to}>{title}</NavLink>
        )}
      </ul>
    </div>
  );
}

export default Dropdown;
