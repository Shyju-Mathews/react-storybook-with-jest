import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Wecome/i);
  expect(linkElement).toBeInTheDocument();
  // const counterName = screen.getByTestId("counter-name")
  // expect(counterName).toBeInTheDocument();
});
