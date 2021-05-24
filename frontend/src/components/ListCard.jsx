import React from 'react';

import Card from './commons/Card';

const ListCard = (props) => {
  // const { listItem } = props;

  return (
    <div className='list-card'>
      <div className='list-card__head'>
        <p>Title</p>
        <button className='btn'>See more</button>
      </div>
      <div className="list-card__content">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>

      </div>
    </div>
  );
}

export default ListCard;
