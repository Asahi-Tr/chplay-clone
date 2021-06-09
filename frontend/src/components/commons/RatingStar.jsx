import React from 'react';

const RatingStar = ({ value }) => {
  let intValue = parseFloat(value);
  return (
    <div className="ratingstar">
      <div className={intValue > 1 ? "fullstar" : "star"}>
        {intValue < 1 && <div style={{ width: ((intValue - 0) * 100) + '%' }}></div>}
      </div>
      <div className={intValue > 2 ? "fullstar" : "star"}>
        {intValue < 2 && intValue > 1 && <div style={{ width: ((intValue - 1) * 100) + '%' }}></div>}
      </div>
      <div className={intValue > 3 ? "fullstar" : "star"}>
        {intValue < 3 && intValue > 2 && <div style={{ width: ((intValue - 2) * 100) + '%' }}></div>}
      </div>
      <div className={intValue > 4 ? "fullstar" : "star"}>
        {intValue < 4 && intValue > 3 && <div style={{ width: ((intValue - 3) * 100) + '%' }}></div>}
      </div>
      <div className={intValue >= 5 ? "fullstar" : "star"}>
        {intValue < 5 && intValue > 4 && <div style={{ width: ((intValue - 4) * 100) + '%' }}></div>}
      </div>
    </div>
  );
}

export default RatingStar;
