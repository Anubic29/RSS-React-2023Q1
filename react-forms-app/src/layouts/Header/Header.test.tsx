import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

describe('Header component', () => {
  it('header with route /', () => {
    render(
      <BrowserRouter>
        <Header activeRoute="/" />
      </BrowserRouter>
    );

    const mainLink = screen.getByRole('link', { name: 'Main' });
    const aboutLink = screen.getByRole('link', { name: 'About' });
    const formLink = screen.getByRole('link', { name: 'Form' });

    expect(mainLink).toHaveAttribute('href', '/');
    expect(mainLink.className).toEqual(expect.stringMatching(/_active_/));
    expect(aboutLink).toHaveAttribute('href', '/about');
    expect(aboutLink.className).not.toEqual(expect.stringMatching(/_active_/));
    expect(formLink).toHaveAttribute('href', '/form');
    expect(formLink.className).not.toEqual(expect.stringMatching(/_active_/));
  });

  it('header with route /about', () => {
    render(
      <BrowserRouter>
        <Header activeRoute="/about" />
      </BrowserRouter>
    );

    const mainLink = screen.getByRole('link', { name: 'Main' });
    const aboutLink = screen.getByRole('link', { name: 'About' });
    const formLink = screen.getByRole('link', { name: 'Form' });

    expect(mainLink).toHaveAttribute('href', '/');
    expect(mainLink.className).not.toEqual(expect.stringMatching(/_active_/));
    expect(aboutLink).toHaveAttribute('href', '/about');
    expect(aboutLink.className).toEqual(expect.stringMatching(/_active_/));
    expect(formLink).toHaveAttribute('href', '/form');
    expect(formLink.className).not.toEqual(expect.stringMatching(/_active_/));
  });

  it('header with route /form', () => {
    render(
      <BrowserRouter>
        <Header activeRoute="/form" />
      </BrowserRouter>
    );

    const mainLink = screen.getByRole('link', { name: 'Main' });
    const aboutLink = screen.getByRole('link', { name: 'About' });
    const formLink = screen.getByRole('link', { name: 'Form' });

    expect(mainLink).toHaveAttribute('href', '/');
    expect(mainLink.className).not.toEqual(expect.stringMatching(/_active_/));
    expect(aboutLink).toHaveAttribute('href', '/about');
    expect(aboutLink.className).not.toEqual(expect.stringMatching(/_active_/));
    expect(formLink).toHaveAttribute('href', '/form');
    expect(formLink.className).toEqual(expect.stringMatching(/_active_/));
  });

  it('header with route /not-found', () => {
    render(
      <BrowserRouter>
        <Header activeRoute="/not-found" />
      </BrowserRouter>
    );

    const mainLink = screen.getByRole('link', { name: 'Main' });
    const aboutLink = screen.getByRole('link', { name: 'About' });
    const formLink = screen.getByRole('link', { name: 'Form' });

    expect(mainLink).toHaveAttribute('href', '/');
    expect(mainLink.className).not.toEqual(expect.stringMatching(/_active_/));
    expect(aboutLink).toHaveAttribute('href', '/about');
    expect(aboutLink.className).not.toEqual(expect.stringMatching(/_active_/));
    expect(formLink).toHaveAttribute('href', '/form');
    expect(formLink.className).not.toEqual(expect.stringMatching(/_active_/));
  });
});
