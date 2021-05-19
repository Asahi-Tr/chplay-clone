import React from 'react';

import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

const Card = (props) => {
  return (
    <Router>
      <div className='card'>
        <Link to='/' className="card__img">
          <img src="https://picsum.photos/150" alt="" />
          <div></div>
        </Link>
        <div className="card__info">
          <Link to='/'><strong>Name</strong></Link>
          <Link to='/'>Developer</Link>
        </div>

        <div className="card__rate"></div>

      </div>
    </Router>
  );
}

export default Card;
