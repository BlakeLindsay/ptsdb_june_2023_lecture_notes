import { render, screen } from '@testing-library/react';
import App from './App';
//* This is importing the "App" function from our "App.jsx" file

test('renders learn react link', () => {
  render(<App />); // this is how we will "display" the App component
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
