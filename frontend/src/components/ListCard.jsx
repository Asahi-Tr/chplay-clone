import React from 'react';

import Card from './commons/Card';

const ListCard = ({ title, listItem, oneCategory }) => {
  let contentStyle = {
    overflowX: !oneCategory ? "auto" : "unset",
    flexWrap: oneCategory ? "wrap" : "nowrap"
  }

  return (
    <div className='list-card'>
      <div className='list-card__head'>
        <p>{title}</p>
        {!oneCategory && <button className='btn'>See more</button>}
      </div>
      <div className="list-card__content" style={contentStyle}>
        {listItem && listItem.map((item) => <Card
          key={item.appId}
          {...item}
        />)}

      </div>
    </div>
  );
}

export default ListCard;
