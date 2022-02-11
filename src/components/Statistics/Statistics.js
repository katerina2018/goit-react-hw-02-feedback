import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className="statistics-list">
      <li className="statistics-item">
        <span className="statistics-title">Good:</span> {good}
      </li>
      <li>
        <span>Neutral: </span> {neutral}
      </li>
      <li>
        <span>Bad: </span> {bad}
      </li>
      <li>
        <span>Total: </span>
        {total}
      </li>
      <li>
        <span>Positive feedback: </span>
        {positivePercentage}%
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
};

export default Statistics;
