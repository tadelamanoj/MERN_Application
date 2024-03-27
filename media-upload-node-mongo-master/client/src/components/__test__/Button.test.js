// Button.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../Button';

test('Button component renders with correct text and triggers click event', () => {
  // Define the expected text for the button
  const buttonText = 'Click me';
  
  // Render the button component
  const { getByText, getByTestId } = render(<Button label={buttonText} />);
  
  // Get the button element by its data-testid attribute
  const button = getByTestId('my-button-testid');
  
  // Check that the button exists
  expect(button).toBeInTheDocument();
  
  // Check if the button text matches the expected text
  expect(getByText(buttonText)).toBeInTheDocument();
  
  // Simulate a click event on the button
  fireEvent.click(button);
  
  // Check if the click event was triggered
  // Here, you can add further assertions based on the expected behavior of the button click
});
