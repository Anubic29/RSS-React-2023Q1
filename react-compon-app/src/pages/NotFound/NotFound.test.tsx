import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from './NotFound';

describe('NotFound', () => {
  it('should be in document', () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    const notFound = screen.getByTestId('not-found-page');
    expect(notFound).toBeInTheDocument();
    const content = screen.queryByText(/The page you are looking for is not exist/i);
    expect(content).toBeInTheDocument();
  });
});
