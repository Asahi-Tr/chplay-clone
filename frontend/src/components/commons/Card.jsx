import React from 'react';

import {
  Link
} from "react-router-dom";

import RatingStar from './RatingStar';

const Card = ({ appId, developerId, title, icon, developer, score }) => {
  return (
    <div className='card'>
      <Link to={`/details/${appId}`} className="card__img">
        <img src={icon} alt="" />
        <div></div>
      </Link>
      <div className="card__info">
        <Link to={`/details/${appId}`} ><strong>{title}</strong></Link>
        <Link to={`/dev/${developerId}`}>{developer}</Link>
      </div>

      <div className="card__rate">
        <RatingStar value={score} />
      </div>

    </div>
  );
}

export default Card;
