import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './MainLayout';
import { OverlayProvider, useOverlay } from '../../contexts';

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

  it('overlay close with overlay btn', () => {
    const TestComponent = () => {
      const overlay = useOverlay();

      return (
        <>
          <MainLayout />
          <button
            data-testid="button-open"
            onClick={() => {
              overlay.setContentOverlay(<h1>Title</h1>);
              overlay.setIsVisible(true);
            }}
          >
            Open
          </button>
        </>
      );
    };

    render(
      <BrowserRouter>
        <OverlayProvider>
          <TestComponent />
        </OverlayProvider>
      </BrowserRouter>
    );

    const btnOpen = screen.getByTestId('button-open');
    fireEvent.click(btnOpen);

    const overlay = screen.getByTestId('overlay');
    const overlayClose = screen.getByTestId('overlay-close');
    expect(overlay).toBeInTheDocument();

    fireEvent.click(overlayClose);
    expect(overlay).not.toBeInTheDocument();
  });

  it('overlay close with overlay back', () => {
    const TestComponent = () => {
      const overlay = useOverlay();

      return (
        <>
          <MainLayout />
          <button
            data-testid="button-open"
            onClick={() => {
              overlay.setContentOverlay(<h1>Title</h1>);
              overlay.setIsVisible(true);
            }}
          >
            Open
          </button>
        </>
      );
    };

    render(
      <BrowserRouter>
        <OverlayProvider>
          <TestComponent />
        </OverlayProvider>
      </BrowserRouter>
    );

    const btnOpen = screen.getByTestId('button-open');
    fireEvent.click(btnOpen);

    const overlay = screen.getByTestId('overlay');
    const overlayBack = screen.getByTestId('overlay-back');
    expect(overlay).toBeInTheDocument();

    fireEvent.click(overlayBack);
    expect(overlay).not.toBeInTheDocument();
  });
});
