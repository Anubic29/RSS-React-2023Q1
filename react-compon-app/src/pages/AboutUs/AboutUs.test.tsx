import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AboutUs from './AboutUs';

describe('AboutUs', () => {
  it('should be in document', () => {
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>
    );
    const aboutUs = screen.getByTestId('about-us-page');
    expect(aboutUs).toBeInTheDocument();
    const content = screen.getByText(/About content/i);
    expect(content).toBeInTheDocument();
  });
});
