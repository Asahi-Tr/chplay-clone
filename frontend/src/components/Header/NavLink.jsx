import React from 'react';

import {
  Link,
  useRouteMatch
} from "react-router-dom";

const NavLink = ({ to, children, className, actClass }) => {
  let match = useRouteMatch({ path: to, exact: false });
  className = match ? className + ` ${actClass}` : className;
  return (
    <Link to={to} className={className}>{children}</Link>
  )
}

export default NavLink;
