import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Header from './Header';

describe('Header', () => {
  it('renders correctly',() => {
    render(<Header />);
    const title =  screen.getByText('Taís');
    expect(title).toBeInTheDocument();
    const links =  screen.getAllByRole('link');
    links.forEach((link) => {
      expect(link).toBeInTheDocument();
    });
  });
});
