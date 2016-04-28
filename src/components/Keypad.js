import React, { Component, PropTypes } from 'react';

let Keypad = ({ digits, actions, dispatch}) => {
  return (
    <div>
      <h3>{digits}</h3>
      <ul>
        <li>
          <button>1</button>
          <button onClick={() => actions.pressButton(2, digits)}>2 - ABC</button>
          <button onClick={() => actions.pressButton(3, digits)}>3 - DEF</button>
        </li>
        <li>
          <button onClick={() => actions.pressButton(4, digits)}>4 - GHI </button>
          <button onClick={() => actions.pressButton(5, digits)}>5 - JKL</button>
          <button onClick={() => actions.pressButton(6, digits)}>6 - MNO</button>
        </li>
        <li>
          <button onClick={() => actions.pressButton(7, digits)}>7 - PQRS</button>
          <button onClick={() => actions.pressButton(8, digits)}>8 - TUV</button>
          <button onClick={() => actions.pressButton(9, digits)}>9 - WXYZ</button>
        </li>
        <li>
          <button onClick={() => actions.clearDigits()}>Clear</button>
        </li>
      </ul>
    </div>
  );
}

Keypad.propTypes = {
  digits: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};

export default Keypad
