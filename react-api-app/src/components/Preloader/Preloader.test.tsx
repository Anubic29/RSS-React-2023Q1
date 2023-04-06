import React from 'react';
import { render, screen } from '@testing-library/react';
import Preloader from './Preloader';

describe('Select', () => {
  it('should be in document', () => {
    render(<Preloader />);

    const preloader = screen.getByTestId('preloader');
    expect(preloader).toBeInTheDocument();
  });

  it('with text', () => {
    render(<Preloader text="text" />);

    const preloaderText = screen.getByTestId('preloader-text');
    expect(preloaderText).toHaveTextContent('text');
  });
});
