import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Header from './Header';

describe('Header', () => {
  it('renders correctly', async () => {
    render(<Header />);
    const title = await screen.findByText('Taís');
    expect(title).toBeInTheDocument();
    const links = await screen.getAllByRole('link');
    links.forEach((link) => {
      expect(link).toBeInTheDocument();
    });
  });
});
