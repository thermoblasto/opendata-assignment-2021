import React from 'react';

import './ChooseTime.css';

const Header = ({ handleDate, selectedDate }) => {
  const currentDate = new Date();
  console.log(currentDate);
  const yesterday = currentDate.getDate() - 1;
  const dayBeforeYesterday = currentDate.getDate() - 2;
  const twodaysBeforeYesterday = currentDate.getDate() - 3;

  const dates = [
    currentDate.getDate(),
    yesterday,
    dayBeforeYesterday,
    twodaysBeforeYesterday,
  ];

  return (
    <div className='header'>
      <label>
        Select the date:
        <select
          className='header_select'
          value={selectedDate}
          onChange={handleDate}
        >
          {dates.map((date, index) => (
            <option key={index} value={date}>
              {date}/{currentDate.getMonth() + 1}/{currentDate.getFullYear()}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default Header;
