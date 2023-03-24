import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './MainLayout';

describe('MainLayout', () => {
  it('should be in document', () => {
    render(
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    );
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
    const content = screen.getByTestId('content');
    expect(content).toBeInTheDocument();
  });
});
