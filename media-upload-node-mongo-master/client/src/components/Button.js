// Button.js

import React from 'react';

const Button = ({ onClick, label }) => {
  return (
    <button id="my-button" onClick={onClick} data-testid="my-button-testid">
      {label}
    </button>
  );
};

export default Button;
