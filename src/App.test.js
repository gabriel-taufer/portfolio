import { render, screen } from '@testing-library/react';
import App from './App';

test("renders Hey, I'm Gabriel", () => {
  render(<App />);
  const linkElement = screen.getByText(/Hey, I'm Gabriel/i);
  expect(linkElement).toBeInTheDocument();
});
