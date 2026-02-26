// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BulmaVortex title', () => {
    render(<App />);
    const titleElement = screen.getByText(/BulmaVortex/i);
    expect(titleElement).toBeInTheDocument();
});
