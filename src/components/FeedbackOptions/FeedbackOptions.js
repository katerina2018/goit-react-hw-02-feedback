import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {Object.keys(options).map(elem => (
        <button key={elem} type="button" onClick={() => onLeaveFeedback(elem)}>
          {elem}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
