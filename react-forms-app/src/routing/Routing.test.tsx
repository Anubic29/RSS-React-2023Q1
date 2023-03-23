import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Routing from './Routing';

describe('Routing', () => {
  it('renders Main component on root path', () => {
    render(
      <MemoryRouter initialEntries={['']}>
        <Routing />
      </MemoryRouter>
    );
    const mainElement = screen.getByTestId('main-page');
    expect(mainElement).toBeInTheDocument();
  });

  it('renders AboutUs component on /about path', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <Routing />
      </MemoryRouter>
    );
    const aboutUsElement = screen.getByTestId('about-us-page');
    expect(aboutUsElement).toBeInTheDocument();
  });

  it('renders NotFound component on non-existing path', () => {
    render(
      <MemoryRouter initialEntries={['/sad']}>
        <Routing />
      </MemoryRouter>
    );
    const notFoundElement = screen.getByTestId('not-found-page');
    expect(notFoundElement).toBeInTheDocument();
  });
});
