import React, { Component, PropTypes } from 'react';

let T9 = ({ actions, words, digits }) => {
  return (
    <ul>
      {words.map((word) => {
        return (
          <li>{word}</li>
        )
      })}
    </ul>
  );
}

T9.propTypes = {
  words: PropTypes.array.isRequired,
  digits: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};

export default T9
